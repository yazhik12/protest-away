import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            state: '',
            event_category: '',
            event_date: new Date(),
            email: '',
            event_description: '',
            files: [],
            submitted: false,
            id: uuidv4(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getIncidentTypes = this.getIncidentTypes.bind(this);

    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    handleDateChange = date => {
        this.setState({event_date: date});
      };

    handleFileChange = (event) => {
        this.setState({files: event.target.files});
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO: Save the report
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
        fetch("http://localhost:8000/submitform", requestOptions)
            .then(res => res.json())
            .then(data => this.setState({ submitted: true }));

        // this.setState({submitted : true})
    }

    getIncidentTypes() {
        return ['Cop Watch', 
                'Police Accountability',
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
        var submitted = this.state.submitted;
        return (
            !submitted ? 
                <div>
                    <h1 className={styles.Header}>
                        Report an Incident
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name (Optional)<br />
                            <input name="name" type="text" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            City<br />
                            <input name="city" type="text" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            State<br />
                            <input name="state" type="text" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            Type of Incident<br />
                            <select name="event_category" onChange={this.handleChange} >
                                {types.map((type) => <option key={type} value={type}>{type}</option>)}
                            </select>
                        </label>
                        <br /><br />
                        <label>
                            Incident Date<br />
                            <DatePicker selected={this.state.event_date} onChange={this.handleDateChange} />
                        </label>
                        <br /><br />
                        <label>
                            Email<br />
                            <input name="email" type="text" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            Description of Incident<br />
                            <textarea name="event_description" onChange={this.handleChange} />
                        </label>
                        <br /><br />
                        <label>
                            Upload Image or Video<br />
                            <input type="file" onChange={this.handleFileChange}/>
                        </label>
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>  
                : 
                <div>
                    <h1 className={styles.Header}>
                        Connect with Help
                    </h1>
                    <p><b>Thank you for reporting this incident</b></p>
                    <p> The incident has been shared with the civic organizations listed below.</p>
                </div>
            
        )
    }

}

export default Report;