import React, { Component } from 'react';
import secured from "../hoc/secured";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class Feature extends Component {

    componentWillMount() {
        if(!this.props.message) {
            this.props.fetchSecretMessage();
        }
    }

    render = () => {
        return (
            <div>{ this.props.message }</div>
        )
    }

}

const mapStateToProps = ({ feature }) => ({
    message: feature.message
});

export default secured(connect(mapStateToProps, actions)(Feature));