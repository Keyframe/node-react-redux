import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AppWrapper from "../AppWrapper/AppWrapper";

import {
    fetchVersion,
} from "../../actions/generalActions";

import "../../styles/Index.css";

class Index extends Component {
    componentDidMount() {
        this.props.fetchVersion();
    }

    render() {
        return (
            <AppWrapper>
                <div className="Index">
                    <div className="content">
                        <div>Version: { this.props.version } - { process.env.NODE_ENV }</div>
                    </div>
                </div>
            </AppWrapper>
        );
    }
}

Index.propTypes = {
    fetchVersion: PropTypes.func.isRequired,
    version: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
    return {
        version: state.general.version,
    };
};

export default connect(mapStateToProps, {
    fetchVersion,
})(Index);

