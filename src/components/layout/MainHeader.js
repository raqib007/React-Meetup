import {Link} from 'react-router-dom';
import classes from './MainHeader.module.css';

function MainHeader() {
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
                        <li>Favourites</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;
