const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

const commonConfig = {
  entry: { main: "./src/index.tsx" },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // filename: "h5.html", // filename不写的话默认为index.html 一般不用写
    }),
    new webpack.ProvidePlugin({
      // 全局自动引入 'antd' 并赋值给键为antd的变量。
      antd: "antd",
      _: "lodash",
      // 使用库里的某个方法，用数组。['库名'，'库方法']
      _join: ["lodash", "join"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
            limit: 2048,
          },
        },
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  optimization: {
    usedExports: true,
    runtimeChunk: "single", // webpack 5 可以不用了, 低版本可能会影响 output的[contenthash]占位符
    splitChunks: {
      chunks: "all", // 默认async
      // minSize: 20000,
      // minRemainingSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   defaultVendors: {
      //     // 同步的代码会走到这里
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true,
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
    },
  },
  output: {
    // publicPath: "www.cdn.com", 默认为('')空
    path: path.resolve(__dirname, "../dist"),
  },
};

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
};
