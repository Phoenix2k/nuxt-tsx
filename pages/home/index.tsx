import Logo from '@/components/Logo';
import Vue, { VNode } from 'vue';
import './index.scss';

export default Vue.extend({
  name: 'Home',
  components: {
    Logo
  },
  render(): VNode {
    return (
      <div class="container">
        <div>
          <Logo />
          <h1 class="title" itemprop="title">
            nuxt-tsx
          </h1>
          <h2 class="subtitle">Nuxt.js build with TypeScript and TSX support</h2>
          <div class="links">
            <nuxt-link class="button button--grey" to="/about">
              About page
            </nuxt-link>
            <a class="button button--green" href="https://nuxtjs.org/" target="_blank">
              Documentation
            </a>
            <a class="button button--grey" href="https://github.com/nuxt/nuxt.js" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
});
