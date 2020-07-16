import styles from '../../src/App.module.scss';
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Action extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className={styles.Header}>Take Action page</h1>
            </div>
        )
    }
}

export default Action;