import {useHistory} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const history = useHistory();

    function handleAddMeetup(meetup){
        fetch('https://react-meetup-6f243-default-rtdb.firebaseio.com/meetup.json',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(meetup)
        }).then(response=>{
            history.replace('/');
        });
    }

    return (
        <section>
            <h2>Add New Meetup</h2>
            <NewMeetupForm onAddMeetup={handleAddMeetup}/>
        </section>
    );
}

export default NewMeetup;
