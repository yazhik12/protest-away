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
