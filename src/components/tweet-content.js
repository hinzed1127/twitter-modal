var ContentEditable = require('react-contenteditable');
import React, { Component } from 'react';

const TweetContent = (props) => {
    return (
        <textarea
            className="tweet"
            placeholder="Tweet something!"
            value={props.tweet}
            onChange={event => props.onTweetChange(event.target.value)}>
        </textarea>
    );


};
//
// class TweetContent extends Component {
//     render() {
//         return (
//             <div
//                 contentEditable="true"
//                 onChange={event => this.handleChange(event.target.value)}>
//                 {this.state.tweet}
//             </div>
//         )
//     }
//
//     handlChange(tweet) {
//         this.setState({tweet});
//     }
// }

export default TweetContent;
