import React, { Component } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";

import "../../styles/ErrorPage.css";

class ErrorPage extends Component {
    render() {
        return (
            <AppWrapper>

                <div className="Error-page row flex-column vh-100 justify-content-md-center align-items-center">
                    <p className="Error-404">
                    {this.props.code ? this.props.code : "404"}
                    </p>

                    <p className="Error-text">
                        {this.props.statusText ? this.props.statusText : "Oops! Page not found."}
                    </p>
                </div>

            </AppWrapper>
        );
    }
}

export default ErrorPage;

