import React from 'react';

const Footer = ({tweetLength}) => {
    const tweetClass = (140-tweetLength) <= 0 ? 'invalid-length' : '';
    return (
        <div className="footer">
            <img className="arrow-target" src="./assets/arrow-target.png" />
            <img className="camera" src="./assets/camera.png" />
            <span className={`characters-left ${tweetClass}`}>{140-tweetLength}</span>
        </div>
    )
};

export default Footer;
