/**
 * Created by krzysztofk on 2017-07-18.
 */
import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', ()=> {

    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('Should have the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('Should have a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('Should have a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('When entering some text', () => {

        const COMMENT = 'new comment';

        beforeEach(() => {
            component.find('textarea').simulate('change', COMMENT);
        });

        it('Should show that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value(COMMENT);
        });

        it('Should clear the input when submitted', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });

    })

});