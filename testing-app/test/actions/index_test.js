import { expect } from '../test_helper';
import { POST_COMMENT } from '../../src/actions/types';
import postComment from '../../src/actions/index';

describe('Actions', () => {

    describe('Post Comment', () => {

        const COMMENT = 'New Comment';
        let action;

        beforeEach(() => {
            action = postComment(COMMENT)
        });

        it('Should have the correct type', () => {
            expect(action.type).to.be.equal(POST_COMMENT);
        });

        it('Should have the correct payload', () => {
            expect(action.payload).to.be.equal(COMMENT);
        });

        it('Should have the correct type even for empty comment', () => {
            const emptyCommentAction = postComment();
            expect(emptyCommentAction.type).to.be.equal(POST_COMMENT);
            expect(emptyCommentAction.payload).to.be.undefined;
        });

    });

});