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
        this.onTweetChange = this.onTweetChange.bind(this);
        this.selectMention = this.selectMention.bind(this);
        // this.findUsername = this.findUsername.bind(this);
    }

    findUsername(username) {
        searchTwitter(username, (users) => {
            this.setState({users});
        });
    }

    selectMention(selectedUser) {
        let tweetArray = this.state.tweet.split(' ')
        tweetArray[tweetArray.length-1] = `@${selectedUser} `;

        let newTweet = tweetArray.join(' ');

        this.setState({
            tweet: newTweet,
            users: []
        });

        //TODO: put focus back on the textarea after selection
    }

    onTweetChange(tweet) {
        this.setState({tweet});

        const mention = this.checkMention(tweet);

        if (mention) {
            this.findUsername(mention);
            //TODO: add focus to the list of users
            //TODO: add keybindings (up/down arrows, tab autocomplete)
        } else {
            this.setState({users: []});
        }
    }

    checkMention(tweet) {
        const tweetArray = tweet.split(' ')
        const lastWord = tweetArray[tweetArray.length-1];

        if (lastWord[0] == '@' &&
            lastWord.split('').filter(char => char == '@').length == 1 &&
            lastWord.length >= 3) {
                return lastWord;
            } else {
                return null;
            }
    }

    render() {
        return (
            <div>
                <Header/>
                {/*<Tweet
                    tweet={this.state.tweet}
                    onTweetChange={this.onTweetChange} />*/}
                < TweetContent
                    tweet={this.state.tweet}
                    onTweetChange={this.onTweetChange}/>
                <Footer tweetLength={this.state.tweet.length} />
                <UserSuggestions
                    key={this.state.tweet}
                    users={this.state.users}
                    onMentionSelect={this.selectMention} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.modal'));
