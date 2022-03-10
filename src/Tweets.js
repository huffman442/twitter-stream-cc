import React, { Component } from 'react';
import './App.css';
import { Tweet } from 'react-twitter-widgets'

class Tweets extends Component {

    render() {
      return (
            <div className="tweets">
            {this.props.tweetResults.results.map((tweet) => { 
                return (
                    <Tweet tweetId={tweet.tweet_id} />
                )
            } )}
            </div>
        )
    }
}

export default Tweets;