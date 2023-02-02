// import { BoxExp } from './Box_exp/Box_exp';
// import { Avatar, ThisMan } from './Avatar/Avatar';
import { Card } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { List } from './FriendsList/FriendsList';
import { Transaction } from './TransactionHistory/TransactionHistory';

// json подключаем в App
import dateJson from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import actionData from '../assets/transactions.json';

//здесь из безымянного массива получаем объект и его поля
// console.log(data);
// console.log(data[1]);
// console.log(data[1].label);


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: 'gold',
      // }}
    >
      
      {/* React homework template 01111 */}
      
      {/* <BoxExp />
      
      <Avatar
      //  src="https://images.unsplash.com/photo-1660579232151-f12f71c76cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"   
          alt="nature"
       />
      <ThisMan /> */}

      <Card
        
        avatar={dateJson.avatar}
        username={dateJson.username}
        tag={dateJson.tag}
        location={dateJson.location}
        stats={dateJson.stats} 
            
      />

      <Statistics
        
        title="Upload statsaa"
        stats={data}

      />

      < List
        friendsData={friends}
        
      />

      <Transaction
        action={actionData}

      />

    </div>
  );
};
