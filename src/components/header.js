import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <img className="profile-pic" src="./assets/profile-picture.png" />
            <img className="twitter-logo" src="./assets/twitter-logo.png" />
            <span className="user">Daniel Hinze</span>
            <span className="user-handle">@daniel_hinze</span>
            <img className="chevron" src="./assets/chevron.png" />
        </div>
    );
};

export default Header;
