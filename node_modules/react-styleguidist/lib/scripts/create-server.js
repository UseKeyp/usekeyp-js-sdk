"use strict";

exports.__esModule = true;
exports.default = createServer;

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _makeWebpackConfig = _interopRequireDefault(require("./make-webpack-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createServer(config, env) {
  const webpackConfig = (0, _makeWebpackConfig.default)(config, env);
  const baseConfig = {
    host: config.serverHost,
    port: config.serverPort,
    compress: true,
    hot: true,
    client: {
      logging: 'none'
    },
    static: Array.isArray(config.assetsDir) ? config.assetsDir.map(assetsDir => ({
      directory: assetsDir,
      watch: true,
      publicPath: '/'
    })) : {
      directory: config.assetsDir,
      watch: true,
      publicPath: '/'
    },
    devMiddleware: {
      stats: webpackConfig.stats || {}
    }
  }; // Allow custom devServer options to override base config.

  webpackConfig.devServer = { ...baseConfig,
    ...webpackConfig.devServer
  };
  const compiler = (0, _webpack.default)(webpackConfig);
  const devServer = new _webpackDevServer.default(webpackConfig.devServer, compiler); // User defined customizations

  if (config.configureServer) {
    config.configureServer(devServer.app, env);
  }

  return {
    app: devServer,
    compiler
  };
}