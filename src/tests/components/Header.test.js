import React from 'react';
import { shallow } from 'enzyme'
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('ExpensifyApp');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});