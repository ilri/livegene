var Encore = require('@symfony/webpack-encore');
var GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');

Encore
  // directory where compiled assets will be stored
  .setOutputPath('public/build/')
  // public path used by the web server to access the output path
  .setPublicPath('/build')
  // only needed for CDN's or sub-directory deploy
  //.setManifestKeyPrefix('build/')

  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
   */
  .addEntry('app', './assets/js/app.js')
  .addEntry('spa', './assets/spa/main.js')
  //.addEntry('page1', './assets/js/page1.js')
  //.addEntry('page2', './assets/js/page2.js')

  // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  // Cezar: I want a single file output.
  // .splitEntryChunks()

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   *
   * Enable & configure other features below. For a full
   * list of features, see:
   * https://symfony.com/doc/current/frontend.html#adding-more-features
   */
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // enables Sass/SCSS support
  //.enableSassLoader()

  // uncomment if you use TypeScript
  //.enableTypeScriptLoader()

  // uncomment if you're having problems with a jQuery plugin
  //.autoProvidejQuery()

  // uncomment if you use API Platform Admin (composer req api-admin)
  //.enableReactPreset()
  //.addEntry('admin', './assets/js/admin.js')

  /*
   * BABEL CONFIG
   */
  .configureBabel((babelConfig) => {
    babelConfig.plugins.push('@babel/plugin-transform-runtime');
    const preset = babelConfig.presets.find(([name]) => name === '@babel/preset-env');
    if (preset !== undefined) {
      preset[1].useBuiltIns = 'usage';
      preset[1].corejs = { version: 3, proposals: true };
    }
  })

  // enable Vue Loader
  .enableVueLoader()
  // ckeditor
  .copyFiles([
    {
      from: './node_modules/ckeditor/',
      to: 'ckeditor/[path][name].[ext]',
      pattern: /\.(js|css)$/,
      includeSubdirectories: false
    },
    {from: './node_modules/ckeditor/adapters', to: 'ckeditor/adapters/[path][name].[ext]'},
    {from: './node_modules/ckeditor/lang', to: 'ckeditor/lang/[path][name].[ext]'},
    {from: './node_modules/ckeditor/plugins', to: 'ckeditor/plugins/[path][name].[ext]'},
    {from: './node_modules/ckeditor/skins', to: 'ckeditor/skins/[path][name].[ext]'}
  ])
  .addLoader(
    {
      test: /\.json$/i,
      include: [require('path').resolve(__dirname, 'node_modules/ckeditor')],
      loader: 'raw-loader',
      type: 'javascript/auto',
    },
  )
  .addLoader(
    {
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        fix: true,
        emitError: false,
        emitWarning: true,
      },
    },
  )
  .addPlugin(new GoogleFontsPlugin(
    {
      fonts: [
        { family: 'Open Sans', variants: ['500i', '800'] },
        { family: 'Open Sans Condensed', variants: ['500', '700'] }
      ],
    },
  ))
;

module.exports = Encore.getWebpackConfig();
