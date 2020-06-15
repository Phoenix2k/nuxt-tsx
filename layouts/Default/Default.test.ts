/// <reference types="jest" />

import { mount } from '@vue/test-utils';
import Default from './Default';

const options = {
  stubs: ['nuxt']
};

const wrapper = mount(Default, options);

describe('Default layout', () => {
  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
