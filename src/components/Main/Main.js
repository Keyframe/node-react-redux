// NOTE(dominik): Load core components first //
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

// NOTE(dominik): Load external components //
import { Switch, Route } from "react-router-dom";

// NOTE(dominik): Load external CSS files //

// NOTE(dominik): Load CSS for this component //
import "../../styles/Main.css";

// NOTE(dominik): Load custom components (and their CSS files),
import Index from "../Index/Index";
import ErrorPage from "../ErrorPage/ErrorPage";

// NOTE(dominik): Load the rest //
import store from "../../store";

const NoMatch = ({ location }) => {
    return (
        <div>
            No match for <code>{location.pathname}</code>
        </div>
    );
};

class Main extends Component {
    componentDidMount() {
        // OFF(dominik):
        // Manual loading forbidden, when possible!
        // If you need it, though. This is how you do it:

        // const jquery = document.createElement("script");
        // jquery.src = "_extlib/jquery-3.3.1.min.js";
        // jquery.async = false;
        // document.body.appendChild(jquery);
    }

    render() {
        return (
            <Provider store={store}>
                <main>
                    <Switch>
                        <Route exact path="/" component={Index}/>

                        <Route component={ErrorPage} />

                    </Switch>
                </main>
            </Provider>
        );
    }
}

NoMatch.propTypes = {
    location: PropTypes.object.isRequired,
};

export default Main;

