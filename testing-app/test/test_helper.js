import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from '../src/reducers/index';
import chaiJquery from 'chai-jquery';

// 1. Set up testing environment to run like a browser in the command line
//  - JSDOM simulates the dom within a command line
//  - instead of using window (global in browser) we use global in node.js
//  - by default $ will try to access DOM, so we need to redeclare it and point to global.window
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window);

// 2. Build 'renderComponent' helper that should render a given react class
//  - ComponentClass - reference to a class of component that we are building
//  - componentInstance - component not a dom
function renderComponent(ComponentClass, props = {}, state = {}) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass { ...props } />
        </Provider>
    );
    return $(ReactDOM.findDOMNode(componentInstance));    // produces jQuery object that represents DOM object
}

// 3. Build helper for simulating events
//  $.fn.* - adds function globally, every jQuery object will have access to this function
//  $('div').simulate -> this within a simulate function will refer to the $('div') element
$.fn.simulate = function(eventName, value) {
    if(value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
};

// 4. Set up chai-jquery
//  - $ - instance of jquery that we initialized above
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };