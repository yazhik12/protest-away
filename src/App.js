import React, { Component } from "react";
import styles from "./App.module.scss";
import Main from "./Main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={styles.Navbar}>
          <Link className={styles.link} to="/">
            <div>
              <h5 className={styles.NavbarHeaderText}>
                TAKE ACTION, <strong className={styles.Bold}>FROM HOME.</strong>
              </h5>
            </div>
          </Link>
          <div className={styles.NavbarLinks}>
            <Link className={styles.link} to="/connect">
              <div className={styles.NavbarLink}>
                <h5>CONNECT TO A CAUSE</h5>
              </div>
            </Link>
            <Link className={styles.link} to="/report">
              <div className={styles.NavbarLink}>
                <button>
                  <h5>REPORT INCIDENT</h5>
                </button>
              </div>
            </Link>
          </div>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
