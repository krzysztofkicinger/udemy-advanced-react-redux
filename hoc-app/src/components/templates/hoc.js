import React, { Component } from 'react';

export default function(ComposedComponent) {

    class HOCComponent extends Component {
        return() {
            return <ComposedComponent {...this.props} />
        }
    }

    return HOCComponent;

}