import { POST_COMMENT } from './types';

export default function postComment(comment) {
    console.log(`Post Comment action: ${comment}`)
    return {
        type: POST_COMMENT,
        payload: comment
    }
}