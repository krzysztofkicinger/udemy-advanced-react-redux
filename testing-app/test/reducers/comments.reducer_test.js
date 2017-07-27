import { expect } from '../test_helper';
import { POST_COMMENT } from '../../src/actions/types';
import reduceCommentsAction from '../../src/reducers/comments.reducer';

describe('Comment Reducer', () => {

    it('Should return an empty array by default', () => {
        const state = reduceCommentsAction(undefined, {});
        expect(state).to.be.instanceof(Array);
        expect(state.length).to.be.equal(0);
    });

    it('Should handle an action of type POST_COMMENT', () => {
        const COMMENT = 'New Comment';
        const ACTION = {
            type: POST_COMMENT,
            payload: COMMENT
        };
        const state = reduceCommentsAction([], ACTION);
        expect(state).to.contain(COMMENT);
        expect(state.length).to.be.equal(1);
    })

});