import {useState,useEffect} from 'react';
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetups',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetups which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetups',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a second, amazing meetups which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetups() {

    const [isLoading,setLoading] = useState(false);
    const [meetups,setMeetups] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://react-meetup-6f243-default-rtdb.firebaseio.com/meetup.json')
            .then(response => response.json())
            .then(data=>{
               console.log(data);
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
    },[])

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
