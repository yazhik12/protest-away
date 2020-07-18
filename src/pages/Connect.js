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

class Connect extends Component {
    constructor(props) {
        super(props);
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
                <p>FInd civic organizations in your area that you can support</p>
                <strong>There are 6 local civic organizations in your area</strong>
            </div>
        <div class={connectstyles.item2}>
            <strong>Search By Location</strong>
            <form>
                <input type="text" placeholder="city" />
            </form>
        </div>
            <div class={connectstyles.item3}>
                <img
                src={aclu}
                alt="American Civil Liberties"
                height={62}
                width={93}/>
            </div>
            <div class={connectstyles.item4}>
                <strong>American Civil Liberties</strong>
                <p>Location: New York, NY</p>
                <p>
                    <a href="https://www.aclu.org/affiliate/new-york">
                Visit Website
                </a>
                </p>
            </div>
            <div class={connectstyles.item5}>
                <img src={blm} alt="Black Lives Matter" height={92} width={92} />
            </div>
            <div class={connectstyles.item6}>
                <strong>Black Lives Mater</strong>
                <p>Location: Multiple</p>
                <p>
                    <a href="https://blacklivesmatter.com/">Visit Website</a>
                </p>
          </div>
          <div class={connectstyles.item7}>
            <img
              src={bv}
              alt="Black Visions Collective"
              height={92}
              width={92}/>
          </div>
          <div class={connectstyles.item8}>
            <strong>Black Visions Collective</strong>
            <p>Location: Minneapolis, MN</p>
            <p>
              <a href="https://www.blackvisionsmn.org/">Visit Website</a>
            </p>
          </div>
          <div class={connectstyles.item9}>
            <img
              src={naacp}
              alt="NAACP Legal Defense Fund"
              height={93}
              width={93}/>
          </div>
          <div class={connectstyles.item10}>
            <strong>NAACP Legal Defense Fund</strong>
            <p>Location: New York, NY</p>
            <p>
              <a href="https://www.naacpldf.org/">Visit Website</a>
            </p>
          </div>
          <div class={connectstyles.item11}>
            <img
              src={nbf}
              alt="NAACP Legal Defense Fund"
              height={93}
              width={93}
            />
          </div>
          <div class={connectstyles.item12}>
            <div class={connectstyles.item11}>
              <img src={rtb} alt="Reclaim the Block" height={92} width={92} />
            </div>
          </div>
          <div class={connectstyles.item13}>
            <strong>National Bail Fund Network</strong>{" "}
            <p>Location: Multiple</p>
            <p>
              <a href="https://www.communityjusticeexchange.org/nbfn-directory">
                Visit Website
              </a>
            </p>
          </div>
          <div class={connectstyles.item14}>
            <strong>Reclaim the Block</strong>
            <p>Location: Minneapolis, MN</p>
            <p>
              <a href="https://www.reclaimtheblock.org/home">Visit Website</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Connect;
