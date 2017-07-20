/**
 * Created by krzysztofk on 2017-07-18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostComment from '../actions/index';

const bindMethods = Symbol();
const initializeState = Symbol();
const postComment = Symbol();

class CommentBox extends Component {

    constructor(props) {
        super(props);
        this[initializeState]();
        this[bindMethods]();
    }

    onChange(event) {
        this.setState({ comment: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        this[postComment](this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form className="comment-box" onSubmit={this.onSubmit}>
                <div>
                    <h3>Add Comment</h3>
                    <textarea style={{ width: '100%' }} value={this.state.comment} onChange={this.onChange}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit Comment</button>
                </div>
            </form>
        )
    }

    [initializeState]() {
        this.state = {
            comment: ''
        }
    }

    [bindMethods]() {
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    [postComment](comment) {
        this.props.postComment(comment);
    }
}

function mapDispatchToState(dispatch) {
    return bindActionCreators( {
        postComment: PostComment
    }, dispatch);
}

export default connect(null, mapDispatchToState)(CommentBox);