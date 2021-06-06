import {useState,useEffect} from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {

    const [isLoading,setLoading] = useState(false);
    const [meetups,setMeetups] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://react-meetup-6f243-default-rtdb.firebaseio.com/meetup.json')
            .then(response => response.json())
            .then(data=>{
               //console.log(data);
               let meetups = [];
               for(let key in data){
                   meetups.push({id:key,...data[key]});
               }
               setMeetups(meetups);
               setLoading(false);
            })
            .catch(error=>{
                console.log(error);
                setLoading(false);
            });
    },[]);

    if(isLoading){
        return <div>Loading....</div>
    }

    return (
        <section>
            <h2>All Meetups</h2>
            <MeetupList meetups={meetups}/>
        </section>);
}

export default AllMeetups;
