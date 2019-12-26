module.exports = {
  base: '/nuxt-tsx/',
  head: [
    [
      'link',
      {
        href: '/logo.png',
        rel: 'icon'
      }
    ]
  ],
  locales: {
    '/': {
      description: 'Nuxt.js build with TypeScript and TSX support',
      lang: 'en-GB',
      title: 'Nuxt TSX'
    }
  },
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5]
    }
  },
  themeConfig: {
    activeHeaderLinks: true,
    displayAllHeaders: false,
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        label: 'English',
        lastUpdated: 'Last updated',
        nav: [
          {
            link: '/',
            text: 'Home'
          },
          {
            ariaLabel: 'Language menu',
            items: [
              {
                link: '/en/home/',
                text: 'English'
              }
            ],
            text: 'Languages'
          }
        ],
        selectText: 'Languages',
        sidebar: [
          {
            children: [['/en/home/', 'Introduction']],
            collapsable: false,
            title: 'Home'
          },
          {
            children: [['/en/documentation/', 'Instructions']],
            collapsable: false,
            title: 'Documentation'
          },
          {
            children: [['/en/deployment/', 'Instructions']],
            collapsable: false,
            title: 'Deployment'
          },
          {
            children: [['/en/development/', 'Commands']],
            collapsable: false,
            title: 'Development'
          },
          {
            children: [['/en/testing/', 'End-to-end and unit tests']],
            collapsable: false,
            title: 'Testing'
          },
          {
            children: [['/en/links/', 'Links']],
            collapsable: false,
            title: 'Links'
          }
        ]
      }
    },
    logo: '/logo.png',
    markdown: {
      config: (_md) => {}
    },
    repo: 'Phoenix2k/nuxt-tsx',
    sidebarDepth: 6
  }
};
