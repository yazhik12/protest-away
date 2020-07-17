import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";


class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            state: '',
            type: '',
            date: new Date(),
            email: '',
            description: '',
            files: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getIncidentTypes = this.getIncidentTypes.bind(this);

    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleDateChange = date => {
        this.setState({ date: date });
    };

    handleFileChange = (event) => {
        this.setState({ files: event.target.files });
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO: Implement submit 
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
        return (
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
                        <select name="type" onChange={this.handleChange} >
                            {types.map((type) => <option value={type}>{type}</option>)}
                        </select>
                    </label>
                    <br /><br />
                    <label>
                        Incident Date<br />
                        <DatePicker selected={this.state.date} onChange={this.handleDateChange} />
                    </label>
                    <br /><br />
                    <label>
                        Email<br />
                        <input name="email" type="text" onChange={this.handleChange} />
                    </label>
                    <br /><br />
                    <label>
                        Description of Incident<br />
                        <textarea name="description" onChange={this.handleChange} />
                    </label>
                    <br /><br />
                    <label>
                        Upload Image or Video<br />
                        <input type="file" onChange={this.handleFileChange} />
                    </label>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Report;