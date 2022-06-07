const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map", // "cheap-module-source-map"
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimizer: [
      // 这将仅在生产模式下启用 CSS 优化。
      // 如果您还想在开发中运行它，请将optimization.minimize选项设置为true

      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js",
  },
};
module.exports = merge(commonConfig, prodConfig);
