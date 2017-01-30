import React from 'react';

const User = ({user, onMentionSelect}) => {
    return (
        <li className="user-suggestion" onClick={() => onMentionSelect(user.screen_name)}>
            <img className="profile-pic" src={user.profile_image_url} />
            <img className="twitter-logo" src="./assets/twitter-logo.png" />
            <span className="user-handle">{`@${user.screen_name}`}</span>
            <span className="user">{user.name}</span>
        </li>
    );
}

export default User;
