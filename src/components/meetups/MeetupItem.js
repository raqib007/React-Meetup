import {useContext} from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import {AppContext} from '../../context-provider/App-Context';

function MeetupItem(props) {
    const {image, id, title, address, description} = props.meetup;
    const context = useContext(AppContext);

    const isFavourite = context.isFavourite(id);

    function toggleFavourite(){
        if(isFavourite){
            context.onRemoveFavourite(id);
        }else{
            context.onAddFavourite({
               id:id,
               title: title,
               image:image,
               address:address,
               description:description
            });
        }

    }

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
                    <button onClick={toggleFavourite}>{isFavourite ? 'Remove From Favourite' : 'To Favourites'}</button>
                </div>
            </Card>
        </div>
    );
}

export default MeetupItem;
