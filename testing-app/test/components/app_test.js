import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    // Use 'it' to test a single attribute of a target
    it('Should show the CommentBox', () => {

        expect(component.find('.comment-box')).to.exist;

    });

    it('Should show a Comment List', () => {
        expect(component.find('.comment-list')).to.exist;
    })

});