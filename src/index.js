import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import TweetContent from './components/tweet-content';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <TweetContent />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.modal'));
