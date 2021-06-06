import {useState,createContext} from 'react';

export const AppContext = createContext({
   favourites: [],
   totalFavourites: 0,
   onAddFavourite: (m) => {},
   onRemoveFavourite: (m) => {},
   isFavourite: (m) => {}
});

export function AppContextProvider({children}){
    const [favourites,setFavourites] = useState([]);

    function addFavouriteHandler(item){
       setFavourites(prevState => {
           return prevState.concat(item);
       })
    }

    function removeFavouriteHandler(itemId){
       setFavourites(prevState=>{
           return prevState.filter(meetup=> meetup.id !== itemId);
       })
    }

    function itemIsFavouriteHandler(itemId){
           return favourites.some(meetup=> meetup.id === itemId);
    }

    const context = {
        favourites: favourites,
        totalFavourites: favourites.length,
        onAddFavourite: addFavouriteHandler,
        onRemoveFavourite: removeFavouriteHandler,
        isFavourite: itemIsFavouriteHandler
    }

    return(
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
