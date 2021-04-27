import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import actionstyles from "../../src/Action.module.scss";
import rep from "./rep.png";
import donate from "./donate.png";
import petition from "./petition.png";
import desc from "./desc.png";
import action from "./actions.png";
import moment from "moment";


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
        var url = 'https://cors-anywhere.herokuapp.com/https://usgeocoder.com/api/get_info.php?zipcode=' + zipcode + '&authkey=c78292f63121ce1bbd1a464eec8f799b&format=json'
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

            document.getElementById("repInfo1title").innerHTML = '<p><b>National Senator 1</b></p>';
            document.getElementById("repInfo2title").innerHTML = '<p><b>National Senator 2</b></p>';
            document.getElementById("repInfo3title").innerHTML = '<p><b>House of Representatives 1</b></p>';
            document.getElementById("repInfo4title").innerHTML = '<p><b>Governor</b></p>';
            document.getElementById("repInfo5title").innerHTML = '<p><b>Attorney General 1</b></p>';
            document.getElementById("repInfo6title").innerHTML = '<p><b>Attorney General 2</b></p>';


            document.getElementById("repInfo1").innerHTML = 'Name: ' + national_senator_1 + ', Number: ' + national_senator_1_num + ', Email/Website: ' + '<a href="' +  national_senator_1_contact + '" target="_blank">' + national_senator_1_contact + '</a>';
            document.getElementById("repInfo2").innerHTML = 'Name: ' + national_senator_2 + ', Number: ' + national_senator_2_num + ', Email/Website: ' + '<a href="' +  national_senator_2_contact + '" target="_blank">' + national_senator_2_contact + '</a>';
            document.getElementById("repInfo3").innerHTML = 'Name: ' + house_of_rep_1 + ', Number: ' + house_of_rep_1_num + ', Email/Website: ' + '<a href="' +  house_of_rep_1_contact + '" target="_blank">' + house_of_rep_1_contact + '</a>';
            document.getElementById("repInfo4").innerHTML = 'Name: ' + gov + ', Number: ' + gov_num + ', Email/Website: ' + '<a href="' +  gov_contact + '" target="_blank">' + gov_contact + '</a>';
            document.getElementById("repInfo5").innerHTML = 'Name: ' + ag_1 + ', Number: ' + ag_1_num + ', Email/Website: ' + '<a href="' +  ag_1_contact + '" target="_blank">' + ag_1_contact + '</a>';
            document.getElementById("repInfo6").innerHTML = 'Name: ' + ag_2 + ', Number: ' + ag_2_num + ', Email/Website: ' + '<a href="' +  ag_2_contact + '" target="_blank">' + ag_2_contact + '</a>';

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
        console.log(data);
        return (
            <div className={actionstyles.floatContainer}>
                <h1 className={styles.Header}>Take Action</h1>
                <h3>Event: {data.event_title}</h3>
                <p><b>Category: </b>{data.event_category}</p>
                <p><b>Communities: </b>{data.communities.join(', ')}</p>
                <p><b>Location: </b>{data.event_city}, {data.event_state}</p>
                <p><b>Date: </b>{moment(data.event_date).format("LL")}</p><br />
                <div className={actionstyles.descAndAction}>
                <div className={actionstyles.desc}>
                <img
                    src={desc}
                    height={50}
                    width={170}/>

                <p>{data.event_description}</p>
                {data.link != null ? <a href={data.link} target="_blank">See post on Twitter</a> : null}
                <br /><br />
                </div>
                <div className={actionstyles.actions}>
                 <img
                    src={action}
                    height={50}
                    width={170}/><br />
                <div>
                <a
                className={actionstyles.action}
                href={petitionMap[data.event_category] == null ? petitionUrl + hashtags[data.event_category] : petitionMap[data.event_category]} target="_blank">
                <img
                    src={petition}
                    height={93}
                    width={93}/>
                    <br/><br/>
                    Sign a petition</a>
                <br/>

                <a className={actionstyles.action} href="https://colorofchange.org/" target="_blank">
                <img
                    src={donate}
                    height={93}
                    width={93}/><br/><br/>
                    Donate to an affiliated civic organization</a>
                <br/>
                <a
                className={actionstyles.action}
                href="https://www.house.gov/representatives/find-your-representative" target="_blank">
                <img
                    src={rep}
                    height={93}
                    width={93}/>
                    <br/><br/>
                    Contact your local representative</a>



                </div>

                </div>
                </div>
            </div>
        )
    }
}

export default Action;
