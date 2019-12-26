# Documentation

This build comes bundled with [VuePress][vuepress], which you can use to document your application.

## Configuration
```
.
└─ docs
   └─ .vuepress
      └─ config.js
```

See [Configuration][vuepress-config] for more information on how to configure your VuePress build.

## Internationalization
```
.
docs
├─ README.md
└─ en
   ├─ deployment
   │  └─ README.md
   ├─ development
   │  └─ README.md
   ├─ documentation
   │  └─ README.md
   ├─ home
   │  └─ README.md
   ├─ links
   │  └─ README.md
   └─ testing
      └─ README.md
```

See [Internationalization][vuepress-i18n] for more information on how to localize your documentation.

## Scripts

### Development
```sh
$ npm run docs:dev
```
This will create a local server with hot-reload and reflect the changes you make while modifying these files.

### Build for production
```sh
$ npm run docs:build
```
This will build all files for production and place them in `docs/.vuepress/dist`.

## Theme
```
.
docs
├─ README.md
└─ .vuepress
   ├─ config.js
   └─ styles
      └─ palette.styl
```
See the [Default Theme Config][vuepress-theme-config] and [Writing a theme][vuepress-writing-a-theme] for more information on how to customize your theme.

[vuepress]: https://vuepress.vuejs.org/
[vuepress-config]: https://vuepress.vuejs.org/guide/basic-config.html
[vuepress-i18n]: https://vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config
[vuepress-theme-config]: https://vuepress.vuejs.org/theme/default-theme-config.html
[vuepress-writing-a-theme]: https://vuepress.vuejs.org/theme/writing-a-theme.html
