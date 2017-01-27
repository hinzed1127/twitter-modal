import React from 'react';

const TweetContent = ({tweet}) => {
    return (
        <textarea
            className="tweet"
            placeholder="Tweet something!"
            value={tweet}
            onChange={event => console.log(event.target.value)}>
        </textarea>
    );
};

export default TweetContent;
