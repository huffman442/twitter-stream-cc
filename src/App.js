import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Tweets from './Tweets.js';
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      topic: "nasa",
      tweetResults: {
        results: []
      }
    }
  

  Axios
    .get("https://twitter-microservice.herokuapp.com/tweets/show/nasa")
    .then((response) =>  {
      console.log(response.data);
      this.setState({tweetResults: response.data});
    });
  }

  render() {

    return (
      <div className="App">
        <div className="container">
        <Tweets />

        </div>
      </div>
    );
  }
}
export default App;
