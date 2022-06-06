const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map", // "eval-cheap-module-source-map"
  devServer: {
    static: "../dist",
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // modules: true,
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
};
module.exports = merge(commonConfig, devConfig);
