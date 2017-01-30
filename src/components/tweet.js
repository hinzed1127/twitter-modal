import React, { Component } from 'react';
var ContentEditable = require('react-contenteditable');

class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: props.tweet
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <ContentEditable
                className="tweet"
                html={this.state.html}
                disabled={false}
                onChange={event => this.handleChange(event.target.value)}
                />
        );
    }

    handleChange(tweet) {
        this.setState({html: tweet});
        this.props.onTweetChange(tweet);
    }
}

export default Tweet;
