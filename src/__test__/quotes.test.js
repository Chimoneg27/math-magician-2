import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/quotes';

describe('Quotes', () => {
  test('Should be the same as the snapshot', () => {
    const component = renderer.create(<Quotes />);
    const instance = component.toJSON();
    expect(instance).toMatchSnapshot();
  });
});
