var ContentEditable = require('react-contenteditable');
import React, { Component } from 'react';

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
