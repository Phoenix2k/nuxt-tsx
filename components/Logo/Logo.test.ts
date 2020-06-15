/// <reference types="jest" />

import { mount } from '@vue/test-utils';
import Logo from './Logo';

const wrapper = mount(Logo);

describe('Logo', () => {
  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
