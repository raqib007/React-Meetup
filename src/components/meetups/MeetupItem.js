import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
    const {image, id, title, address, description} = props.meetup;

    return (
        <div className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={image} alt={title}/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <div>{description}</div>
                </div>
                <div className={classes.actions}>
                    <button>To Favourites</button>
                </div>
            </Card>
        </div>
    );
}

export default MeetupItem;
