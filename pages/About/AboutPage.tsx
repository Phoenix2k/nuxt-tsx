import Vue, { VNode } from 'vue';

export default Vue.extend({
  render(): VNode {
    return (
      <div class="container">
        <div>
          <h1 class="title">About</h1>
          <h2 class="subtitle">This is the about page.</h2>
          <div class="links">
            <nuxt-link class="button button--grey" to="/">
              Home page
            </nuxt-link>
          </div>
        </div>
      </div>
    );
  }
});
