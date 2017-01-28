import React from 'react';

const User = ({user}) => {
    return (
        <div className="user-suggestion">
            <img className="profile-pic" src={user.profile_image_url} />
            <img className="twitter-logo" src="./assets/twitter-logo.png" />
            <span className="user-handle">{`@${user.screen_name}`}</span>
            <span className="user">{user.name}</span>
        </div>
    );
}

export default User;
