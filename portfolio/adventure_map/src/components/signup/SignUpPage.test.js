import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SignUpPage from './SignUpPage';

function setup() {

    let renderer = TestUtils.createRenderer();
    renderer.render(<SignUpPage />);
    let output = renderer.getRenderOutput();

    return {
        output, 
        renderer
    };
}

describe('SignUpPage via React Test Utils', () => {
    it('renders first div', () => {
        const { output } = setup();
        expect(output.type).toBe('div');
    });
});



