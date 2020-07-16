import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App /> {/*will render the selected page to be displayed by the `Main` component */}
    </BrowserRouter>
), document.getElementById("root"));
serviceWorker.unregister();

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
var tweetsDict = new Map();

hashtags.forEach(getTweets);

function getTweets(value, index, array) {
  TweetJs.Search(value,
	function (data) {
		tweetsDict[value] = data;
		console.log(data);
	});
}

// Instagram API code
// const Http = new XMLHttpRequest();
// const url='https://www.instagram.com/explore/tags/blacklivesmatter/?__a=1';
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }

var request = require('request');
var zipcode = 94122;
var url = 'https://cors-anywhere.herokuapp.com/https://usgeocoder.com/api/get_info.php?zipcode=' + zipcode + '&authkey=7727c367c836716b4e2b587c6a66b4ee&format=json'
var representativesInfo;
request(url, function(err, response, body) {
    body = JSON.parse(body); 
    representativesInfo = body["usgeocoder"]["jurisdictions_info"];
    console.log(representativesInfo);
})



