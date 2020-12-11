import styles from "../../src/App.module.scss";
import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import moment from "moment";
=======
import { Link } from 'react-router-dom';
import moment from 'moment'

>>>>>>> 5268c4995a3d5a3189534bce1451023585d81d7a

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tweets: this.getTweets(),
      selected: "incidents" | "tweets",
    };
    this.getTweets = this.getTweets.bind(this);
  }

<<<<<<< HEAD
  componentDidMount() {
    fetch(":8000/getreports")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err));
  }
=======
    componentDidMount() {
        fetch("http://virtual-protest.org:8000/getreports")
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
    }
>>>>>>> 5268c4995a3d5a3189534bce1451023585d81d7a

  incidentsClickHandler(evt) {
    console.log("ibtn");
    this.setState({ selected: "incidents" });
  }

  tweetsClickHandler(evt) {
    console.log("tbtn");
    this.setState({ selected: "tweets" });
  }

<<<<<<< HEAD
  render() {
    console.log(this.state.tweets);
    let dummyHashtagData = [
      { name: "#blacklivesmatter", val: 1004957 },
      { name: "#georgefloyd", val: 256529 },
      { name: "#racism", val: 57263 },
      { name: "#protest", val: 33495 },
    ];
    return (
      <div className={styles.Main}>
        <div className={styles.BannerContainer}>
          <div className={styles.BannerHeaderContainer}>
            <div className={styles.BannerHeader}>
              <div className={styles.BannerText}>
                Protest Away<span>.</span>
              </div>
              <div className={styles.BannerSloganContainer}>
                <div class={styles.BannerSloganText}>
                  <p>make an impact from anywhere</p>
=======
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
                        {this.state.selected === 'tweets' ?
                            <div className={styles.TweetsAndIncidentsButtonsContainer}>
                                <div onClick={() => this.incidentsClickHandler()} className={styles.IncidentsButton}>
                                    REPORTED INCIDENTS
                                </div>

                                <div style={{ 'borderBottom': '0.125rem solid black' }} onClick={() => this.tweetsClickHandler()} className={styles.TweetsButton}>
                                    TWITTER POSTS
                                </div>
                            </div>
                            :
                            <div className={styles.TweetsAndIncidentsButtonsContainer}>
                                <div style={{ 'borderBottom': '0.125rem solid black' }} onClick={() => this.incidentsClickHandler()} className={styles.IncidentsButton}>
                                    REPORTED INCIDENTS
                                </div>

                                <div onClick={() => this.tweetsClickHandler()} className={styles.TweetsButton}>
                                    TWITTER POSTS
                                </div>
                            </div>}
                    </div>
                    {this.state.selected === 'tweets' ?
                        <div className={styles.Container}>
                            {this.state.tweets.map((item, i) => {
                                return (
                                        item["tweets"]["statuses"].map((item2, i2) => {
                                            var tweetObj = {
                                                event_category: item["hashtag"],
                                                city: item2["user"]["location"],
                                                state: "",
                                                event_description: item2["text"],
                                                event_date: item2["created_at"],
                                                link: "https://twitter.com/" + item2["user"]["screen_name"] + "/status/" + item2["id_str"],
                                            }
                                            return (
                                                <div key={i} className={styles.Data}>
                                                    <ul>
                                                        {<li><b>Hashtag:</b> {item["hashtag"]}</li>}
                                                        {<li><b>Post:</b> {item2["text"]}</li>}
                                                        {<li><b>Location:</b> {item2["user"]["location"]}</li>}
                                                        {<li><b>Date:</b> {moment(item2["created_at"]).format("LL")}</li>}
                                                        {<li><Link to={{
                                                            pathname: '/action',
                                                            data: tweetObj
                                                        }}><button className={styles.TakeActionButton}>Take Action</button></Link></li>}
                                                    </ul>
                                                </div>
                                            );
                                        })
                                );
                            })}


                        </div>
                        :
                        <div className={styles.Container}>
                            {this.state.data.map((item, i) => {
                                return (
                                    <div key={i} className={styles.Data}>
                                        <ul>
                                            {<li><b>Name:</b> {item.name}</li>}
                                            {<li><b>Category:</b> {item.event_category}</li>}
                                            {<li><b>Date:</b> {moment(item.event_date).format("LL")}</li>}
                                            {<li><b>State:</b> {item.state}</li>}
                                            {<li><b>City:</b> {item.city}</li>}
                                            {<li><b>Title:</b> {item.event_title}</li>}
                                            {<li><b>Description:</b> {item.event_description}</li>}
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
>>>>>>> 5268c4995a3d5a3189534bce1451023585d81d7a
                </div>
              </div>
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
                      <div className={styles.HashtagValue}>
                        {hashtag.val.toLocaleString() + "posts"}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.tweet}>
          <div className={styles.BannerHeaderSubtextContainer}>
            <p className={styles.BannerHeaderSubtext}>
              <strong>
                Tweet about incidents in your community using our hashtag.
              </strong>
              (i.e #protestaway-policebrutality,
              #protestaway-workplacediscrimination)
            </p>
          </div>
        </div>

        <div className={styles.TweetsAndIncidentsContainer}>
          <div className={styles.TweetsAndIncidentsNavbar}>
            <div className={styles.TweetsAndIncidentsButtonsContainer}>
              <div
                style={{ "border-bottom": "15px solid #C4C4C4" }}
                onClick={() => this.incidentsClickHandler()}
                className={styles.IncidentsButton}
              >
                REPORTED INCIDENTS
              </div>

              <div
                style={{ "border-bottom": "15px solid #FBEE1F" }}
                onClick={() => this.tweetsClickHandler()}
                className={styles.TweetsButton}
              >
                TWITTER POSTS
              </div>
            </div>
          </div>
          {/* <div className={styles.Dropdown}>
            <form action="/action_page.php">
              <label for="cars">Sort By</label>
              <select id="cars" name="cars">
                <option value="Select">Select</option>
              </select>
            </form>
            <form action="/action_page.php">
              <label for="cars">Filter By</label>
              <select id="cars" name="cars">
                <option value="Select">Select</option>
              </select>
            </form>
            <form action="/action_page.php">
              <label for="cars"></label>
              <select id="cars" name="cars">
                <option value="Select">Search</option>
              </select>
            </form>
          </div> */}

          {this.state.selected == "tweets" ? (
            <div className={styles.Container}>
              {this.state.tweets.map((item, i) => {
                return item["tweets"]["statuses"].map((item2, i2) => {
                  var tweetObj = {
                    event_category: item["hashtag"],
                    city: item2["user"]["location"],
                    state: "",
                    event_description: item2["text"],
                    event_date: item2["created_at"],
                    link:
                      "https://twitter.com/" +
                      item2["user"]["screen_name"] +
                      "/status/" +
                      item2["id_str"],
                  };
                  return (
                    <div key={i} className={styles.Data}>
                      <ul>
                        {
                          <li>
                            <b>Hashtag:</b> {item["hashtag"]}
                          </li>
                        }
                        {
                          <li>
                            <b>Post:</b> {item2["text"]}
                          </li>
                        }
                        {
                          <li>
                            <b>Location:</b> {item2["user"]["location"]}
                          </li>
                        }
                        {
                          <li>
                            <b>Date:</b>{" "}
                            {moment(item2["created_at"]).format("LL")}
                          </li>
                        }
                        {
                          <li>
                            <Link
                              to={{
                                pathname: "/action",
                                data: tweetObj,
                              }}
                            >
                              <button className={styles.TakeActionButton}>
                                Take Action
                              </button>
                            </Link>
                          </li>
                        }
                      </ul>
                      {/* <table>
                        <tr>
                          <th className="tweets">
                            <b>Post:</b>
                          </th>

                          <th>
                            <b>Date:</b>
                          </th>
                          <th>
                            <b>Hashtag:</b>
                          </th>
                          <th>
                            <b>Location:</b>
                          </th>
                        </tr>

                        <tr>
                          <td>{item2["text"]}</td>
                          <td>{item2["created_at"]}</td>
                          <td>{item["hashtag"]}</td>
                          <td>{item2["user"]["location"]}</td>

                          <td>
                            <Link
                              to={{
                                pathname: "/action",
                                data: tweetObj,
                              }}
                            >
                              <button className={styles.TakeActionButton}>
                                Take Action
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </table> */}
                    </div>
                  );
                });
              })}
            </div>
          ) : (
            <div className={styles.Container}>
              {this.state.data.map((item, i) => {
                return (
                  <div key={i} className={styles.Data}>
                    <ul>
                      {
                        <li>
                          <b>Name:</b> {item.name}
                        </li>
                      }
                      {
                        <li>
                          <b>Email:</b> {item.email}
                        </li>
                      }
                      {
                        <li>
                          <b>Category:</b> {item.event_category}
                        </li>
                      }
                      {
                        <li>
                          <b>Date:</b> {item.event_date}
                        </li>
                      }
                      {
                        <li>
                          <b>State:</b> {item.state}
                        </li>
                      }
                      {
                        <li>
                          <b>City:</b> {item.city}
                        </li>
                      }
                      {
                        <li>
                          <b>Description:</b> {item.event_description}
                        </li>
                      }
                      {
                        <li>
                          <Link
                            to={{
                              pathname: "/action",
                              data: item,
                            }}
                          >
                            <button className={styles.TakeActionButton}>
                              Take Action
                            </button>
                          </Link>
                        </li>
                      }
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  getTweets() {
    // TweetJS.com - Display your tweets on your website using Javascript alone
    // Copyright 2019 Infinite Loop Development Ltd - InfiniteLoop.ie
    // Do not remove this notice.

    var TweetJs = {
      ListTweetsOnUserTimeline: function(screenName, callback) {
        TweetJs._callApi(
          {
            Action: "ListTweetsOnUserTimeline",
            ScreenName: screenName,
          },
          callback
        );
      },
      Search: function(query, callback) {
        TweetJs._callApi(
          {
            Action: "Search",
            Query: query,
          },
          callback
        );
      },
      _callApi: function(request, callback) {
        var xhr = new XMLHttpRequest();
        URL = "https://www.tweetjs.com/API.aspx";
        xhr.open("POST", URL);
        xhr.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            callback(JSON.parse(xhr.response));
          }
        };
        xhr.send(JSON.stringify(request));
      },
    };

    var hashtags = [
      "#blacklivesmatter",
      "#racism",
      "#policebrutality",
      "#protest",
      "#georgefloyd",
      "#tellblackstories",
      "#blacktechtwitter",
      "#saytheirnames",
      "#nojusticenopeace",
    ];
    // Mapping from hashtag to array of tweets
    var tweetsMap = [];

    hashtags.forEach(getTweets);

    function getTweets(value, index, array) {
      TweetJs.Search(value, function(data) {
        tweetsMap.push({ hashtag: value, tweets: data });
        //console.log(data);
      });
    }

<<<<<<< HEAD
    return tweetsMap;
  }
=======
>>>>>>> 5268c4995a3d5a3189534bce1451023585d81d7a
}

export default Home;
