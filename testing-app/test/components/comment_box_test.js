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

});