import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App /> {/*will render the selected page to be displayed by the `Main` component */}
    </BrowserRouter>
), document.getElementById("root"));
serviceWorker.unregister();

// Instagram API code
// const Http = new XMLHttpRequest();
// const url='https://www.instagram.com/explore/tags/blacklivesmatter/?__a=1';
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }

// usgeocoder for finding representatives to contact
var request = require('request');
var zipcode = 94122;
var url = 'https://cors-anywhere.herokuapp.com/https://usgeocoder.com/api/get_info.php?zipcode=' + zipcode + '&authkey=7727c367c836716b4e2b587c6a66b4ee&format=json'
var representativesInfo;
request(url, function(err, response, body) {
    body = JSON.parse(body); 
    representativesInfo = body["usgeocoder"]["jurisdictions_info"];
    //console.log(representativesInfo);
})



