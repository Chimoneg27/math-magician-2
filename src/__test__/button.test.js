import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from '../components/button';

describe('Button Component Snapshot Tests', () => {
  test('display the 1 button', () => {
    const component = renderer.create(
      <Buttons clickHandler={() => {}} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
