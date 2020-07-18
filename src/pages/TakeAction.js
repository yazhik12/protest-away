import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Action extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props.location;
        console.log(data)
        return (
            <div>
                <h1 className={styles.Header}>Take Action page</h1>
                {data.id + "  " + data.name + "  " + data.email + "  " + data.event_category}
            </div>
        )
    }
}

export default Action;