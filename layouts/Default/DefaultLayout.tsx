import { VNode } from 'vue';
import * as tsx from 'vue-tsx-support';
import './DefaultLayout.scss';

const DefaultLayout = tsx.componentFactory.create({
  render(): VNode {
    return (
      <div>
        <nuxt />
      </div>
    );
  }
});

export default DefaultLayout;
