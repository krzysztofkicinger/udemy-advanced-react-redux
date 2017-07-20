/**
 * Created by krzysztofk on 2017-07-20.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComment(comment) {
        return (
            <li className="list-group-item" key={comment}>{comment}</li>
        )
    }

    render() {
        console.log("RENDER IN COMMENT LIST");
        return (
            <div>
                <ul className="list-group comment-list">
                    {
                        this.props.comments.map(this.renderComment)
                    }
                </ul>
            </div>
        )

    }

}

function mapStateToProps({ comments }) {
    return {
        comments
    }
}

export default connect(mapStateToProps)(CommentList);