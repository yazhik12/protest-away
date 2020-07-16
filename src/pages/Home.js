import styles from '../../src/App.module.scss';
import React, { Component } from "react";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tweets: new Map(),
        };
        this.getTweets = this.getTweets.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8000/api.json")
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
    }


    render() {
        console.log(this.state.tweets);
        return (<div className={styles.Main}>
            <h1>Fetch API</h1>
            <div className={styles.Container}>
                {this.state.data.map((item, i) => {
                    return (
                        <div key={i} className={styles.Data}>
                            <ul>
                                {<li>Name: {item.name}</li>}
                                {<li>Email: {item.email}</li>}
                                {<li>Category: {item.event_category}</li>}
                                {<li>Date: {item.event_date}</li>}
                                {<li>State: {item.state}</li>}
                                {<li>City: {item.city}</li>}
                                {<li>Description: {item.event_description}</li>}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div >)
    }

    getTweets() {
        // TweetJS.com - Display your tweets on your website using Javascript alone
        // Copyright 2019 Infinite Loop Development Ltd - InfiniteLoop.ie
        // Do not remove this notice.

        var TweetJs = {
            ListTweetsOnUserTimeline : function(screenName, callback) {
                TweetJs._callApi({
                        Action: "ListTweetsOnUserTimeline",
                        ScreenName: screenName
                    },
                callback);
            },
            Search: function (query, callback) {
                TweetJs._callApi({
                    Action: "Search",
                    Query: query
                }, callback);
            },
            _callApi: function (request, callback) {
                var xhr = new XMLHttpRequest();
                URL = "https://www.tweetjs.com/API.aspx"; 
                xhr.open("POST", URL);
                xhr.onreadystatechange = function () {
                    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                        callback(JSON.parse(xhr.response));
                    }
                }
                xhr.send(JSON.stringify(request));
            }
        };

        var hashtags = ["#blacklivesmatter", "#racism", "#policebrutality", "#protest", "#georgefloyd", "#tellblackstories", "#blacktechtwitter", "#saytheirnames", "#nojusticenopeace"];
        // Mapping from hashtag to array of tweets
        var tweetsMap = new Map();

        hashtags.forEach(getTweets);

        function getTweets(value, index, array) {
          TweetJs.Search(value,
            function (data) {
                tweetsMap[value] = data;
                console.log(data);
            });
        }

        this.state.tweets = tweetsMap;
    }
}

export default Home;