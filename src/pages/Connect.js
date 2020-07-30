import styles from "../../src/App.module.scss";
import connectstyles from "../../src/Connect.module.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import aclu from "./aclu2@2x.png";
import blm from "./blm.png";
import bv from "./bv.png";
import rtb from "./rtb.png";
import nbf from "./nbf.png";
import naacp from "./naacp.png";
import eji from "./eji.png";


class Connect extends Component {
    constructor(props) {
        super(props);
        var orgs = [
        {name: "American Civil Liberties", location: "New York, NY", website: "https://www.aclu.org/affiliate/new-york", img: aclu},
        {name: "Black Lives Matter", location: "Multiple", website: "https://blacklivesmatter.com/", img: blm},
        {name: "Black Visions Collective", location: "Minneapolis, MN", website: "https://www.blackvisionsmn.org/", img: bv},
        {name: "NAACP Legal Defense Fund", location: "New York, NY", website: "https://www.naacpldf.org/", img: naacp},
        {name: "National Bail Fund Network", location: "Multiple", website: "https://www.communityjusticeexchange.org/nbfn-directory", img: nbf},
        {name: "Reclaim the Block", location: "Minneapolis, MN", website: "https://www.aclu.org/affiliate/new-york", img: rtb},
        {name: "Equal Justice Initiative", location: "Montgomery, AL", website: "https://eji.org/", img: eji}
      ];
      this.state = {
            allOrgs: orgs,
            shownOrgs: orgs,
            searchTerm: '',
        };

      this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        var newOrgs = [];

        for (var i = 0; i < this.state.allOrgs.length; i++) { 
            if (this.state.allOrgs[i].location.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
              newOrgs.push(this.state.allOrgs[i]);
            }  else if (this.state.allOrgs[i].location == "Multiple") {
              newOrgs.push(this.state.allOrgs[i]);
            }
        } 
        this.setState({ shownOrgs: newOrgs });        
    }
    render() {
    return (
        <div className={styles.main}>
        {/* <h1 className={styles.Header}>Connect for Black Lives</h1>
                <p>FInd civic organizations in your area that you can support</p>
                <strong>There are 6 local civic organizations in your area</strong> */}

        <div class={connectstyles.gridContainer}>
            <div class={connectstyles.item1}>
                <h1 className={styles.Header}>Connect for Black Lives</h1>
                <p>Find civic organizations in your area that you can support</p>
                <strong>There are {this.state.shownOrgs.length} local civic organizations in your area</strong>
            </div>
        <div class={connectstyles.item2}>
            <strong>Search By Location</strong>
            <form>
                <input type="text" placeholder="city" name="searchTerm" onChange={this.handleChange}/>
            </form>
        </div>
        {this.state.shownOrgs.map((item, i) => {
          return (
            <div>
              <div class={connectstyles.item3}>
                <img
                    src={item.img}
                    height={93}
                    width={93}/>
              </div>
              <div class={connectstyles.item4}>
                <strong>{item.name}</strong>
                    <p>Location: {item.location}</p>
                      <p>
                          <a href={item.website} target="_blank">
                            Visit Website
                          </a>
                      </p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default Connect;
