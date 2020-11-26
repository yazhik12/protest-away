import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import coc from "./coc.png";
import reportstyles from '../../src/Report.module.scss'

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Anonymous',
            city: '',
            state: '',
            event_category: '',
            event_date: new Date(),
            email: '',
            event_description: '',
            files: [],
            submitted: false,
            share_to_org: false,
            id: uuidv4(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getIncidentTypes = this.getIncidentTypes.bind(this);
        this.getStates = this.getStates.bind(this);

    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleDateChange = date => {
        this.setState({ event_date: date });
    };

    handleFileChange = (event) => {
        this.setState({ files: event.target.files });
    }

    handleSubmit(event) {
        event.preventDefault();

        // check if fields are empty
        var missingFields = false;
        var errorMessage = 'Please fill out the following mandatory field(s): ';

        if (this.state.city == '') {
            missingFields = true;
            errorMessage += "City, ";
        }
        if (this.state.state == '') {
            missingFields = true;
            errorMessage += "State, ";
        }
        if (this.state.event_category == '') {
            missingFields = true;
            errorMessage += "Type of Incident, ";
        }
        if (this.state.event_date == '') {
            missingFields = true;
            errorMessage += "Incident Date, ";
        }
        if (this.state.event_description == '') {
            missingFields = true;
            errorMessage += "Description of Incident";
        }

        if (errorMessage.endsWith(", ")) {
            errorMessage.substring(0, errorMessage.length - 2);
        }

        if (!missingFields) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    event_category: this.state.event_category,
                    event_date: this.state.event_date,
                    state: this.state.state,
                    city: this.state.city,
                    event_description: this.state.event_description,
                }),
            };
            fetch("http://virtual-protest.org:8000/submitform", requestOptions)
                .then(res => console.log(requestOptions))
                .then(data => this.setState({ submitted: true }));
        } else {
            alert(errorMessage);

        }
    }

    getIncidentTypes() {
        return ['Police Accountability',
            'Corporate Accountability',
            'Criminal Justice Policy',
            'Education',
            'Employment Discrimination',
            'Wrongful Imprisonment',
            'Racist Advertisement',
            'Media Coverage',
            'Immigration',
            'Economic Justice',
            'Other',
        ];
    }

    render() {
        var types = this.getIncidentTypes();
        var states = this.getStates();
        var submitted = this.state.submitted;
        var formData = {event_category: this.state.event_category, 
                        city: this.state.city, 
                        state: this.state.state, 
                        event_date: this.state.event_date.toString(), 
                        event_description: this.state.event_description};
        var sharedToOrg = this.state.share_to_org;
        return (
            !submitted ?
            <div className={reportstyles.floatContainer}>
                
                    <div className={reportstyles.sideBar}>
                        gray
                    </div>
                <div className={reportstyles.formstyle}>
                    <h1 className={styles.Header}>
                        Report an Incident
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name<br />
                            <input  name="name" type="text" placeholder="John Doe" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            City <div className={reportstyles.required}>required</div><br />
                            <input name="city" type="text" placeholder="City" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            State <div className={reportstyles.required}>required</div><br />
                            <select name="state" onChange={this.handleChange} >
                                {states.map((type) => <option key={type} value={type}>{type}</option>)}
                            </select>
                        </label>
                        <br /><br />
                        <label>
                            Type of Incident <div className={reportstyles.required}>required</div><br />
                            <select name="event_category" onChange={this.handleChange} >
                                {types.map((type) => <option key={type} value={type}>{type}</option>)}
                            </select>
                        </label>
                        <br /><br />
                        <label>
                            Incident Date <div className={reportstyles.required}>required</div><br />
                            <DatePicker selected={this.state.event_date} onChange={this.handleDateChange} />
                        </label>
                        <br /><br />
                        <label>
                            Email<br />
                            <input name="email" type="text" placeholder="johndoe@gmail.com" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            Description of Incident <div className={reportstyles.required}>required</div><br />
                            <textarea name="event_description" placeholder="Type something" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            Upload Image or Video<br />
                            <input type="file" onChange={this.handleFileChange} />
                        </label>
                        <br /><br />
                        <input name="share_to_org" type="checkbox" onChange={this.handleChange}/><span>Send my incident and contact information to a local organization</span>
                        <br /><br />
                        <input type="submit" value="Submit" /> 
                    </form>
                </div>
            </div>
                :
                (sharedToOrg ? <div className={reportstyles.aftersubmit}>
                    <h1 className={styles.Header}>
                        Connect with Help
                    </h1>
                    <p><b>Thank you for reporting this incident</b></p>
                    <p> The incident has been shared with the civic organizations listed below.</p>
                     <div>
                        <img
                            src={coc}
                            height={93}
                            width={93}/>
                      </div>
                      <div>
                        <strong>Color of Change</strong>
                            <p>Location: Oakland, CA</p>
                              <p>
                                  <a href={"https://colorofchange.org/"} target="_blank">
                                    Visit Website
                                     </a>
                                </p>
                      </div>
                      {<Link to={{
                                    pathname: '/action',
                                    data: formData,
                                    }}><button className={reportstyles.TakeActionButton}>Take Action</button></Link>}
                </div> : 
                <div className={reportstyles.aftersubmit}>
                    <h1 className={styles.Header}>
                        Connect with Help
                    </h1>
                    <p><b>Thank you for reporting this incident</b></p>
                    <p> You may contact the civic organizations listed below to take action.</p>
                     <div>
                        <img
                            src={coc}
                            height={93}
                            width={93}/>
                      </div>
                      <div>
                        <strong>Color of Change</strong>
                            <p>Location: Oakland, CA</p>
                              <p>
                                  <a href={"https://colorofchange.org/"} target="_blank">
                                    Visit Website
                                     </a>
                                </p>
                      </div>
                      {<Link to={{
                                    pathname: '/action',
                                    data: formData,
                                    }}><button className={reportstyles.TakeActionButton}>Take Action</button></Link>}
                </div>
                )

        )
    }

    getStates() {
        return ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    }


}

export default Report;