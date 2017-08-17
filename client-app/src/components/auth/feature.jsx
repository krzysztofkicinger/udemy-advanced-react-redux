import React, { Component } from 'react';
import secured from "../hoc/secured";

class Feature extends Component {

    render = () => {
        return (
            <div>Feature Page</div>
        )
    }

}

export default secured(Feature);