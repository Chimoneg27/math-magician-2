import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator Component Snapshot Tests', () => {
  test('displays the Calculator component', () => {
    const component = renderer.create(<Calculator />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
