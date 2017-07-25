import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(CommentList, null, {
            comments: ['New Comment', 'Other New Comment']
        });
    });

    it('Should show an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('Should show each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
    });

});