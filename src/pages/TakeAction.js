import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
            this.state = { repsData: representativesInfo };
            // this.setState({repsData: representativesInfo});
            console.log(this.state.repsData);

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
        return (
            <div>
                <h1 className={styles.Header}>Take Action page</h1>
                <p>{data.event_category}</p>
                <p>Location: {data.city}, {data.state}</p>
                <p>Date: {data.event_date}</p>
                <p>{data.event_description}</p>

                <a href={petitionMap[data.event_category]}>Sign a petition</a>
                <br/>
                <a href="https://colorofchange.org/">Connect with an affiliated civic organization</a>
                <br/>
                <p>Contact your local representative</p>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Zip code<br />
                    <input name="zipcode" type="text" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

                </form>
                <p>{this.state.repsData != null ? 'print representative data' : ""}</p>
            </div>
        )
    }
}

export default Action;