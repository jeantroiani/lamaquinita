import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';
import LaMaquinita from './LaMaquinita.js';
import ignoreStyleNames from '../../utils/styleIgnore';
const styles = ignoreStyleNames('../../src/components/LaMaquinita/LaMaquinita.less');
const props = {
  styles
};

describe('LaMaquinita component', function(){
    it('should render a section tag', () => {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<LaMaquinita {...props} />);
        const result = renderer.getRenderOutput();
        expect(result.type).to.equal('section');
        const title = result.props.children[0];
        expect(title.type).to.equal('h1');
    });
});
