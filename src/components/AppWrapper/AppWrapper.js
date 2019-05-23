import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/AppWrapper.css";

class AppWrapper extends Component {
    render() {
        return (
            <div className="AppWrapper d-flex flex-row">

                <div className="container-fluid">
                    <div className="AppWrapper-content">
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

AppWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppWrapper;

