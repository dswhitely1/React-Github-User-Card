import React from 'react';

import './card.styles.scss'

const Card = ({ user: { avatar_url, name, login, location, html_url, followers, following, bio } }) => (
    <div className='card'>
      <img src={avatar_url} alt="User Image"/>
      <div className='card-info'>
        <h3 className='name'>{name}</h3>
        <p className='username'>{login}</p>
        <p>{`Location: ${location}`}</p>
        <p>{`Location: `}
          <a href={html_url}>{html_url}</a>
        </p>
        <p>{`Followers: ${followers}`}</p>
        <p>{`Following: ${following}`}</p>
        <p>{`Bio: ${bio}`}</p>
      </div>
    </div>
);

export default Card;
