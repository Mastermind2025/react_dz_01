// import { useSyncExternalStore } from "react";
import PropTypes from 'prop-types';
// json подключаем в App
// import dateJson from '../../assets/user.json';
import styleProfile from './Profile.module.css';

export const Card = ({username, tag, location, avatar, stats}) => {

    return (

        <div className={styleProfile.profile}>
            <div className={styleProfile.description}>
                
                <img src={avatar}
                    alt="User avatar"
                    className={styleProfile.avatar}
    />
                
    <p className={styleProfile.name}>{username}</p>
    <p className={styleProfile.tag}>{tag}</p>
    <p className={styleProfile.location}>{location}</p>

</div>
    <ul className={styleProfile.stats}>
        <li>
            <span className={styleProfile.label}>Followers</span>
            <span className={styleProfile.quantity}>{stats.followers}</span>
        </li>

        <li>
            <span className={styleProfile.label}>Views</span>
            <span className={styleProfile.quantity}>{stats.views}</span>
        </li>

        <li>
            <span className={styleProfile.label}>Likes</span>
            <span className={styleProfile.quantity}>{stats.likes}</span></li>
        </ul>

</div>
    );
};



Card.propTypes = {
    users: PropTypes.exact({
            username: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: PropTypes.exact({
                followers: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired,
            }),
        }),
}