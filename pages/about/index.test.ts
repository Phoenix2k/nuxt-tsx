/// <reference types="jest" />

import { mount, RouterLinkStub } from '@vue/test-utils';
import AboutPage from '.';

const options = {
  stubs: {
    NuxtLink: RouterLinkStub
  }
};

const wrapper = mount(AboutPage, options);

describe('About page', () => {
  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
