import FriendStyle from './FriendsList.module.css';

//json подключаем в App.jsx
// import friendsData from '../../assets/friends.json';

export const List = ({ friendsData }) => {
    return (
        <ul>
            {friendsData.map(({ avatar, id, name, isOnline }) =>(

            <li key={id}
                className={FriendStyle.item}>
{/*Конкатенация и тернарный. Если приходит true - зелёный флаг,  если false - красный флаг */}
<span className={FriendStyle.status+" "+(isOnline?FriendStyle.green:FriendStyle.red)}>

                    </span>
                    <img src={avatar}
                        className={FriendStyle.avatar}
                        alt="alt"
                        width="80"
                    />
                    <p className={FriendStyle.name}>{ name }</p>
            </li>
                
            ))
}
        </ul>
    );
};
    
    
    