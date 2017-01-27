import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import TweetContent from './components/tweet-content';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweet: 'test'
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <TweetContent tweet={this.state.tweet} onTweetChange />
                <Footer tweetLength={this.state.tweet.length} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.modal'));
