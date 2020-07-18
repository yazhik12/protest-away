import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repsData: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let zipcode = this.state.zipcode;
         // usgeocoder for finding representatives to contact
        var request = require('request');
        var url = 'https://cors-anywhere.herokuapp.com/https://usgeocoder.com/api/get_info.php?zipcode=' + zipcode + '&authkey=7727c367c836716b4e2b587c6a66b4ee&format=json'
        var representativesInfo;
        request(url, function(err, response, body) {
            body = JSON.parse(body); 
            representativesInfo = body["usgeocoder"]["jurisdictions_info"];
            var national_senator_1 = representativesInfo["congressional_legislators"]["national_senator"]["national_senator_1"];
            var national_senator_1_num = representativesInfo["congressional_legislators"]["national_senator"]["national_senator_1_capitol_phone"];
            var national_senator_1_contact = representativesInfo["congressional_legislators"]["national_senator"]["national_senator_1_econtact"];

            var national_senator_2 = representativesInfo["congressional_legislators"]["national_senator"]["national_senator_2"];
            var national_senator_2_num = representativesInfo["congressional_legislators"]["national_senator"]["national_senator_2_capitol_phone"];
            var national_senator_2_contact = representativesInfo["congressional_legislators"]["national_senator"]["national_senator_2_econtact"];

            var house_of_rep_1 = representativesInfo["congressional_legislators"]["house_of_representative"]["representative_1"];
            var house_of_rep_1_num = representativesInfo["congressional_legislators"]["house_of_representative"]["representative_1_capitol_phone"];
            var house_of_rep_1_contact = representativesInfo["congressional_legislators"]["house_of_representative"]["representative_1_econtact"];

            var gov = representativesInfo["state_legislation"]["state_executives"]["governor"];
            var gov_num = representativesInfo["state_legislation"]["state_executives"]["governor_capitol_phone"];
            var gov_contact = representativesInfo["state_legislation"]["state_executives"]["governor_econtact"];

            var ag_1 = representativesInfo["state_legislation"]["other_state_executives"]["attorney_general_1"];
            var ag_1_num = representativesInfo["state_legislation"]["other_state_executives"]["attorney_general_capitol_phone_1"];
            var ag_1_contact = representativesInfo["state_legislation"]["other_state_executives"]["attorney_general_econtact_1"];

            var ag_2 = representativesInfo["state_legislation"]["other_state_executives"]["attorney_general_2"];
            var ag_2_num = representativesInfo["state_legislation"]["other_state_executives"]["attorney_general_capitol_phone_2"];
            var ag_2_contact = representativesInfo["state_legislation"]["other_state_executives"]["attorney_general_econtact_2"];

            ReactDOM.render('National Senator 1', document.getElementById("repInfo1title"));
            ReactDOM.render('National Senator 2', document.getElementById("repInfo2title"));
            ReactDOM.render('House of Representatives 1', document.getElementById("repInfo3title"));
            ReactDOM.render('Governor', document.getElementById("repInfo4title"));
            ReactDOM.render('Attorney General 1', document.getElementById("repInfo5title"));
            ReactDOM.render('Attorney General 2', document.getElementById("repInfo6title"));


            ReactDOM.render('Name: ' + national_senator_1 + ', Number: ' + national_senator_1_num + ', Email/Website: ' + national_senator_1_contact, document.getElementById("repInfo1"));
            ReactDOM.render('Name: ' + national_senator_2 + ', Number: ' + national_senator_2_num + ', Email/Website: ' + national_senator_2_contact, document.getElementById("repInfo2"));
            ReactDOM.render('Name: ' + house_of_rep_1 + ', Number: ' + house_of_rep_1_num + ', Email/Website: ' + house_of_rep_1_contact, document.getElementById("repInfo3"));
            ReactDOM.render('Name: ' + gov + ', Number: ' + gov_num + ', Email/Website: ' + gov_contact, document.getElementById("repInfo4"));
            ReactDOM.render('Name: ' + ag_1 + ', Number: ' + ag_1_num + ', Email/Website: ' + ag_1_contact, document.getElementById("repInfo5"));
            ReactDOM.render('Name: ' + ag_2 + ', Number: ' + ag_2_num + ', Email/Website: ' + ag_2_contact, document.getElementById("repInfo6"));

        })
    }
        
    render() {
        const { data } = this.props.location;
        console.log(this.state.repsData);
        const petitionMap = {
            "Cop Watch": "https://campaigns.organizefor.org/categories/cop-watch",
            "Police Accountability": "https://campaigns.organizefor.org/categories/cop-watch",
            "Corporate Accountability": "https://campaigns.organizefor.org/categories/corporate-accountability-1",
            "Criminal Justice Policy": "https://campaigns.organizefor.org/categories/criminal-justice-1",
            "Education": "https://campaigns.organizefor.org/categories/education-7",
            "Employment Discrimination": "https://campaigns.organizefor.org/categories/employment-discrimination",
            "Wrongful Imprisonment": "https://campaigns.organizefor.org/categories/wrongful-imprisonment",
            "Media Coverage": "https://campaigns.organizefor.org/categories/media-accountability",
            "Immigration": "https://campaigns.organizefor.org/categories/immigration-3",
            "Economic Justice": "https://campaigns.organizefor.org/categories/economic-justice-2",
            "Other": "https://campaigns.organizefor.org/",
        }
        var hashtags = {
            "#blacklivesmatter": "black+lives+matter",
            "#racism": "racism",
            "#policebrutality": "police+brutality",
            "#protest": "protest",
            "#georgefloyd": "george+floyd",
            "#tellblackstories": "tell+black+stories",
            "#blacktechtwitter": "black+tech",
            "#saytheirnames": "say+their+names",
            "#nojusticenopeace": "no+justice+no+peace",
        };
        const petitionUrl = "https://campaigns.organizefor.org/petitions/search?q=";
        return (
            <div>
                <h1 className={styles.Header}>Take Action page</h1>
                <p>{data.event_category}</p>
                <p>Location: {data.city}, {data.state}</p>
                <p>Date: {data.event_date}</p>
                <p>{data.event_description}</p>

                <a href={petitionMap[data.event_category] == null ? petitionUrl + hashtags[data.event_category] : petitionMap[data.event_category]} target="_blank">Sign a petition</a>
                <br/><br />
                <a href="https://colorofchange.org/">Connect with an affiliated civic organization</a>
                <br/>
                
                <form onSubmit={this.handleSubmit}>
                <p>Contact your local representative</p>
                <label>
                    Zip code<br />
                    <input name="zipcode" type="text" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

                </form>
                
                <div id="repInfo1title"></div>
                <div id="repInfo1"></div><br/>
                <div id="repInfo2title"></div>
                <div id="repInfo2"></div><br/>
                <div id="repInfo3title"></div>
                <div id="repInfo3"></div><br/>
                <div id="repInfo4title"></div>
                <div id="repInfo4"></div><br/>
                <div id="repInfo5title"></div>
                <div id="repInfo5"></div><br/>
                <div id="repInfo6title"></div>
                <div id="repInfo6"></div>
            </div>
        )
    }
}

export default Action;