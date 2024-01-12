import React from 'react';
import PropTypes from 'prop-types';

import './friendList.css'

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="frend-item">
    <span className={`status_${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt={`User ${name} avatar`} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
