import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Tweets from './Tweets.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tweet } from 'react-twitter-widgets'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.handleTopicChange=this.handleTopicChange.bind(this);
    this.state = {
      topic: "nasa",
      tweetResults: {}
    }

    this.makeApiCall();
  }

  handleTopicChange(selectedTopic) {
    console.log(selectedTopic);
    this.setState({topic: selectedTopic})
    this.makeApiCall();
  }

  makeApiCall() {
    Axios
    .get("https://twitter-microservice.herokuapp.com/tweets/show/" + this.state.topic + "?limit=10")
    .then((response) => {
      this.setState({tweetResults: response.data});
    })
  }

  render() {
    var tweet;
    if(this.state.tweetResults[0]){
      console.log(this.state.tweetResults[0].tweet_id);
    }
    return (
      <div className="App">
        <div className="container">
          <DropdownButton id="dropdown-basic-button" title="Subject">
            <Dropdown.Item onClick={() => this.handleTopicChange("nasa")}>Nasa</Dropdown.Item>
            <Dropdown.Item onClick={() => this.handleTopicChange("healthcare")}>Healthcare</Dropdown.Item>
            <Dropdown.Item onClick={() => this.handleTopicChange("ruby")}>Ruby</Dropdown.Item>
          </DropdownButton>
          <Tweets tweets={this.state.tweetResults}/>
        </div>
      </div>
    );
  }
}
export default App;
