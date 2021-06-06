import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../../context-provider/App-Context';
import classes from './MainHeader.module.css';

function MainHeader() {

    const context = useContext(AppContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetup</div>
            <nav>
                <ul>
                    <Link to={"/"}>
                        <li>All Meetups</li>
                    </Link>
                    <Link to={"/new_meetup"}>
                        <li>New Meetup</li>
                    </Link>
                    <Link to={"/favourites"}>
                        <li>
                            Favourites
                            <span className={classes.badge}>{context.totalFavourites}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;
