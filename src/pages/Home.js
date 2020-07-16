import styles from '../../src/App.module.scss';
import React, { Component } from "react";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:8000/api.json")
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
    }
    render() {
        return (<div className={styles.Main}>
            <h1>Fetch API</h1>
            <div className={styles.Container}>
                {this.state.data.map((item, i) => {
                    return (
                        <div key={i} className={styles.Data}>
                            <ul>
                                {<li>Name: {item.name}</li>}
                                {<li>Email: {item.email}</li>}
                                {<li>Category: {item.event_category}</li>}
                                {<li>Date: {item.event_date}</li>}
                                {<li>State: {item.state}</li>}
                                {<li>City: {item.city}</li>}
                                {<li>Description: {item.event_description}</li>}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div >)
    }
}

export default Home;