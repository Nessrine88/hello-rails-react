// esbuild.config.js
module.exports = {
    entryPoints: ['app/javascript/application.js'],
    bundle: true,
    sourcemap: true,
    format: 'esm',
    outdir: 'app/assets/builds',
    publicPath: '/assets',
    loader: {
      '.js': 'jsx',
    },
    watch: true,
  };
  