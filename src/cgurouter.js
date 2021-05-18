import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function cgu() {
    return (
        <div>
            <h2>長庚⼤學</h2>
        </div>
    );
}
function cs() {
    return (
        <div>
            <h2>cs</h2>
        </div>
    );
}
function ai() {
    return (
        <div>
            <h2>ai</h2>
        </div>
    );
}
export default function SidebarExample() {
    return (
        <Router>
            <div>
                {/* <div style={{ padding: "10px", width: "40%", background: "#f0f0f0"}} > */}
                {/* style={{ listStyleType: "none", padding: 0 }} */}
                <ul>
                    <li>
                        <Link to="/">cgu</Link>
                    </li>
                    <li>
                        <Link to="/cs">cs</Link>
                    </li>
                    <li>
                        <Link to="/ai">ai</Link>
                    </li>
                </ul>

                {/* <div style={{ flex: 1, padding: "10px" }}> */}
                <hr />
                <Switch>
                    <Route exact path="/">
                        <cgu />
                    </Route>
                    <Route path="/cs">
                        <cs />
                    </Route>
                    <Route path="/ai">
                        <ai />
                    </Route>

                </Switch>
            </div>
        </Router >
    );
}