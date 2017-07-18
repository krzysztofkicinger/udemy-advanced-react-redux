/**
 * Created by krzysztofk on 2017-07-18.
 */
import React, { Component } from 'react';

export default class CommentBox extends Component {

    render() {
        return (
            <form className="comment-box">
                <div>
                    <h3>Add Comment</h3>
                    <textarea style={{ width: '100%' }} />
                </div>
                <div className="pull-xs-right">
                    <button type="submit" className="btn btn-primary">Submit Comment</button>
                </div>
            </form>
        )
    }

}