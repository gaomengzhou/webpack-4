const devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: "../dist",
    historyApiFallback: true, // 解决react-router-dom使用BrowserRouter跳转错误的问题
    open: false,
    port: 3000,
    proxy: {
      "/react/api": {
        // 默认情况下不会代理对 root 的请求。要启用根代理，该devMiddleware.index选项应指定为假值
        // 匹配所有 '/' 需设置index:false  默认 index:true,
        // index:false,
        target: "https://www.dell-lee.com",
        pathRewrite: {
          // "header.json": "demo.json"
        },
        secure: false, // 代理到虚假证书的https 设置为false 开发联调一般不开启  默认true
        changeOrigin: true, //突破Origin限制，建议始终开启。 默认false
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
};

module.exports = devConfig;
