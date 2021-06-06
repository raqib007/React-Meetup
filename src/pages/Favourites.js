import {useContext} from 'react';
import {AppContext} from "../context-provider/App-Context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites(){
    const context = useContext(AppContext);

    let content;
    if(context.totalFavourites === 0){
        content = <div>You have no Favourites! Try adding some.</div>
    }else{
        content = <MeetupList meetups={context.favourites}/>
    }
    return(
       <section>
           <h2>Favourites</h2>
           {content}
       </section>
    );
}

export default Favourites;
