import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Report extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className={styles.Header}>
                    Report an Incident page
                </h1>
            </div>
        )
    }
}

export default Report;