import classes from './MeetupList.module.css';
import MeetupItem from "./MeetupItem";

function MeetupList(props){
    return(
        <div className={classes.list}>
            {props.meetups.map(meetup=><MeetupItem key={meetup.id} meetup={meetup}/>)}
        </div>
    )
}

export default MeetupList;
