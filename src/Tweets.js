import React, { Component } from 'react';
import './App.css';
import { Tweet } from 'react-twitter-widgets'

class Tweets extends Component {

    render() {
      return (
            <div className="tweets">
            {Object.values(this.props.tweets).map((tweet) => { 
                console.log(tweet.tweet_id);
                
                return (
                    <div class="jumbotron">
                        <h3>tweet would have rendered here with id</h3>
                    <p>{tweet.tweet_id}</p>
                    </div>
                )
            } )}
            </div>
        )
    }
}

export default Tweets;