import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import searchTwitter from './services/twitter-search';

import Header from './components/header';
import TweetContent from './components/tweet-content';
import Tweet from './components/tweet';
import Footer from './components/footer';
import UserSuggestions from './components/user-suggestions';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweet: '',
            users: []
        };
        this.updateTweet = this.updateTweet.bind(this);
        // this.findUsername = this.findUsername.bind(this);
        // this.findUsername('Chicago');
    }

    findUsername(username) {
        searchTwitter(username, (users) => {
            // console.log(users);
            this.setState({users});
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <Tweet
                    tweet={this.state.tweet}
                    onTweetChange={this.updateTweet}/>
                <Footer tweetLength={this.state.tweet.length} />
                <UserSuggestions key={this.state.tweet} users={this.state.users} />
            </div>
        );
    }

    updateTweet(tweet) {
        this.setState({tweet});
        this.findUsername(tweet);
    }
}

ReactDOM.render(<App />, document.querySelector('.modal'));
