import React, { Component } from 'react';
import './App.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';


class Tweets extends Component {

    render() {
      return (
            <div className="tweet-holder">
            {Object.values(this.props.tweets).map((tweet, index) => { 
                return (
                    <div className="selfCenter spaceBetween">
                        <TwitterTweetEmbed key={index} tweetId={`${tweet.tweet_id}`} />
                    </div>
                )
            } )}
            </div>
        )
    }
}

export default Tweets;