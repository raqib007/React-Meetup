import {useRef} from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props){

    const titleRef = useRef();
    const urlRef = useRef();
    const addressRef= useRef();
    const descriptionRef = useRef();

    function handleSubmit(event){
        event.preventDefault();

        let title = titleRef.current.value;
        let url = urlRef.current.value;
        let address = addressRef.current.value;
        let description = descriptionRef.current.value;

        const meetup_record = Object.assign({},{
            title:title,
            image:url,
            address:address,
            description: description
        });

        props.onAddMeetup(meetup_record);

        console.log(meetup_record);
    }

    return(
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" required id={"title"} ref={titleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="title">Image Url</label>
                    <input type="url" required id={"url"} ref={urlRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id={"address"} ref={addressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id={"description"} rows={5} ref={descriptionRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;
