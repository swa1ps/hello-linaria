import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

const children = <span>OK</span>;

describe('<Button />', () => {
  it('render children', () => {
    const renderedComponent = mount(<Button>{children}</Button>);
    expect(renderedComponent.contains(children)).toEqual(true);
    renderedComponent.unmount();
  });
});
