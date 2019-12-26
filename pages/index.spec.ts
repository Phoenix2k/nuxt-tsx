/// <reference types="jest" />

import { mount, RouterLinkStub } from '@vue/test-utils';
import IndexPage from '.';

const options = {
  stubs: {
    NuxtLink: RouterLinkStub
  }
};

const wrapper = mount(IndexPage, options);

describe('Index page', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
