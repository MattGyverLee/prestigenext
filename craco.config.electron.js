const fs = require("fs");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const evalSourceMap = require("react-dev-utils/evalSourceMapMiddleware");
const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
const noopServiceWorker = require("react-dev-utils/noopServiceWorkerMiddleware");
let webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  typescript: {
    enableTypeChecking: true 
  }, 
    configure: {
    target: "electron-renderer"
  }, 
  webpack: {
    plugins: {
      add: [
        new NodePolyfillPlugin({
          excludeAliases: ["console"],
        }),
        new webpack.ProvidePlugin({
          WaveSurfer: "wavesurfer.js"
        }),
        new webpack.DefinePlugin({
          'process.env.FLUENTFFMPEG_COV': false
        })
      ],
    },
  },
  devServer: (devServerConfig, { env, paths }) => {
    devServerConfig = {
      onBeforeSetupMiddleware: undefined,
      onAfterSetupMiddleware: undefined,
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error("webpack-dev-server is not defined");
        }
        if (fs.existsSync(paths.proxySetup)) {
          require(paths.proxySetup)(devServer.app);
        }
        middlewares.push(
          evalSourceMap(devServer),
          redirectServedPath(paths.publicUrlOrPath),
          noopServiceWorker(paths.publicUrlOrPath)
        );
        return middlewares;
      },
    };
    return devServerConfig;
  },
};
