import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json'
import transactions from './json/transactions.json'

import './App.css'


const App = () => {
  return (
    <div className='app'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" 
        stats={data} 
      />
      <FriendList 
        friends={friends} 
      />
      <TransactionHistory 
      items={transactions} 
      />
    </div>
  );
}

export default App;