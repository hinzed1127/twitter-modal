var ContentEditable = require('react-contenteditable');
import React, { Component } from 'react';

// const TweetContent = (props) => {
//     let textInput = null;
//
//     function handleClick() {
//         console.log('here');
//         textInput.focus();
//     }
//
//     return (
//         <textarea
//             className="tweet"
//             placeholder="Tweet something!"
//             ref={(input) => {textInput = input;}}
//             value={props.tweet}
//             onChange={event => props.onTweetChange(event)}>
//         </textarea>
//     );
// };
class TweetContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.textInput.focus();
    }

    /* Key Code Reference
     * ******************
     * 9  = Tab
     * 13 = Enter
     * 38 = Up Arrow
     * 40 = Down Arrow
     */
    handleKeyDown(e) {
        if (e.keyCode == 9 ||
            e.keyCode == 13 ||
            e.keyCode == 38 ||
            e.keyCode == 40) {
            this.props.onKeyDown(e);
        } else {
            return;
        }
    }

    render() {
        return (
            <textarea
                className="tweet"
                placeholder="Tweet something!"
                ref={(textarea) => {this.textInput = textarea;}}
                value={this.props.tweet}
                onChange={event => this.props.onTweetChange(event)}
                onKeyDown={event => this.handleKeyDown(event)}>
            </textarea>
        );
    }
}
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
