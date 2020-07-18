import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tweets: this.getTweets(),
            selected: 'incidents' | 'tweets',
        };
        this.getTweets = this.getTweets.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8000/getreports")
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
    }

    incidentsClickHandler(evt) {
        console.log('ibtn')
        this.setState({ selected: 'incidents' })
    }

    tweetsClickHandler(evt) {
        console.log('tbtn');
        this.setState({ selected: 'tweets' })
    }

    render() {
        console.log(this.state.tweets);
        let dummyHashtagData = [
            { name: "#blacklivesmatter", val: 1004957 },
            { name: "#georgefloyd", val: 256529 },
            { name: "#racism", val: 57263 },
            { name: "#protest", val: 33495 },
        ]
        return (
            <div className={styles.Main}>
                <div className={styles.BannerContainer}>
                    <div className={styles.BannerHeaderContainer}>
                        <div className={styles.BannerHeader}>
                            <div className={styles.BannerText}>
                                Protest Away
                            </div>
                            <div className={styles.BannerSloganContainer}>
                                <div class={styles.BannerSloganText}><p>
                                    Make an impact from anywhere
                                </p></div>
                            </div>
                        </div>
                        <div className={styles.BannerHeaderSubtextContainer}>
                            <p className={styles.BannerHeaderSubtext}>
                                <strong>Tweet about incidents in your community using our hashtag.</strong><br />
                                (i.e #protestaway-policebrutality, #protestaway-workplacediscrimination)
                            </p>
                        </div>
                    </div>
                    <div className={styles.TrendingHashtagsContainer}>
                        <div className={styles.TrendingHashtagsHeader}>
                            Trending Hashtags on Twitter
                        </div>
                        <hr className={styles.TrendingHashtagsDivider} />
                        <div className={styles.TrendingHashtagsList}>
                            <ul className={styles.HashtagData}>
                                {dummyHashtagData.map((hashtag, i) => {
                                    return (
                                        <li key={i} className={styles.HashtagListEntry}>
                                            <div className={styles.HashtagName}>{hashtag.name}</div>
                                            <div className={styles.HashtagValue}>{hashtag.val.toLocaleString() + 'posts'}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className={styles.TweetsAndIncidentsContainer}>
                    <div className={styles.TweetsAndIncidentsNavbar}>
                        {this.state.selected == 'tweets' ?
                            <div className={styles.TweetsAndIncidentsButtonsContainer}>
                                <div onClick={() => this.incidentsClickHandler()} className={styles.IncidentsButton}>
                                    REPORTED INCIDENTS
                                </div>

                                <div style={{ 'border-bottom': '0.125rem solid black' }} onClick={() => this.tweetsClickHandler()} className={styles.TweetsButton}>
                                    TWITTER POSTS
                                </div>
                            </div>
                            :
                            <div className={styles.TweetsAndIncidentsButtonsContainer}>
                                <div style={{ 'border-bottom': '0.125rem solid black' }} onClick={() => this.incidentsClickHandler()} className={styles.IncidentsButton}>
                                    REPORTED INCIDENTS
                                </div>

                                <div onClick={() => this.tweetsClickHandler()} className={styles.TweetsButton}>
                                    TWITTER POSTS
                                </div>
                            </div>}
                    </div>
                    {this.state.selected == 'tweets' ?
                        <div className={styles.TweetsTable}>
                            Tweets table
                    </div>
                        :
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
                                            {<li><Link to={{
                                                pathname: '/action',
                                                data: item
                                            }}><button className={styles.TakeActionButton}>Take Action</button></Link></li>}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            </div >)
    }

    getTweets() {
        // TweetJS.com - Display your tweets on your website using Javascript alone
        // Copyright 2019 Infinite Loop Development Ltd - InfiniteLoop.ie
        // Do not remove this notice.

        var TweetJs = {
            ListTweetsOnUserTimeline: function (screenName, callback) {
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
        var tweetsMap = [];

        hashtags.forEach(getTweets);

        function getTweets(value, index, array) {
            TweetJs.Search(value,
                function (data) {
                    tweetsMap.push({ hashtag: value, tweets: data });
                    //console.log(data);
                });
        }

        return tweetsMap;
    }
}

export default Home;