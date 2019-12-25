import Vue, { VNode } from 'vue';
import './Default.scss';

export default Vue.extend({
  render(): VNode {
    return (
      <div>
        <nuxt />
      </div>
    );
  }
});
