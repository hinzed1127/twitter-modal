import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import searchTwitter from './services/twitter-search';

import Header from './components/header';
import TweetContent from './components/tweet-content';
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
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    findUsername(username) {
        searchTwitter(username, (users) => {
            this.setState({users});
        });
    }

    selectMention(selectedUser) {
        let tweetArray = this.state.tweet.split(' ')
        tweetArray[tweetArray.length-1] = `${selectedUser} `;

        let newTweet = tweetArray.join(' ');

        this.setState({
            tweet: newTweet,
            users: []
        });
    }

    onTweetChange(event) {
        var tweet = event.target.value;
        this.setState({tweet});

        const mention = this.checkMention(tweet);

        if (mention) {
            this.findUsername(mention);
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

    onKeyDown(e) {
        if (this.state.users.length > 0) {
            e.preventDefault();
        } else {
            return;
        }

        switch(e.keyCode) {
            case 9:
                this.handleSelect(e.keyCode);
                break;
            case 13:
                this.handleSelect(e.keyCode);
                break;
            case 38:
                this.handleArrows(false);
                break;
            case 40:
                this.handleArrows(true);
                break;
            default:
                return;
        }
    }

    handleSelect(keyCode) {
        let user;
        if (document.querySelector('.focused-mention') != null) {
            user = document.querySelector('.focused-mention').getElementsByClassName('user-handle')[0].innerText;
        } else {
            user = document.querySelector('.user-suggestion').getElementsByClassName('user-handle')[0].innerText;
        }

        this.selectMention(user);
    }

    handleArrows(down) {
        const direction = down ? 1 : -1;
        const focusedMention = document.querySelector('.focused-mention');

        if (this.state.users.length > 0 && focusedMention == null) {
            document.querySelector('.user-suggestion').classList.add('focused-mention');
        } else {
            const userSuggestions = document.querySelectorAll('.user-suggestion');
            const length = userSuggestions.length;
            for (let i=0; i<length; i++) {
                if (userSuggestions[i].classList.contains('focused-mention')){
                    document.querySelectorAll('.user-suggestion')[i].classList.remove('focused-mention');
                    let nextIdx = (i+direction == -1) ? length-1 : (i+direction)%length;
                    document.querySelectorAll('.user-suggestion')[nextIdx].classList.add('focused-mention');
                    break;
                }
            }
        }
    }

    render() {
        return (
            <div>
                <Header/>
                < TweetContent
                    tweet={this.state.tweet}
                    onTweetChange={this.onTweetChange}
                    onKeyDown={this.onKeyDown}/>
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
