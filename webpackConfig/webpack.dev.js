const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: '/dist',
    // historyApiFallback: true, // 解决react-router-dom使用BrowserRouter跳转错误的问题,output.publicPath设置为'/'
    // (下面的写法也行，区别去https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback看)
    historyApiFallback: {
      disableDotRule: true,
    },
    open: false,
    port: 3000,
    proxy: {
      '/react/api': {
        // 默认情况下不会代理对 root 的请求。要启用根代理，该devMiddleware.index选项应指定为假值
        // 匹配所有 '/' 需设置index:false  默认 index:true,
        // index:false,
        target: 'https://www.dell-lee.com',
        pathRewrite: {
          // "header.json": "demo.json"
        },
        secure: false, // 代理到虚假证书的https 设置为false 开发联调一般不开启  默认true
        changeOrigin: true, // 突破Origin限制，建议始终开启。 默认false
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  output: {
    publicPath: '/', // 解决react-router-dom使用BrowserRouter跳转错误的问题
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
};

module.exports = devConfig;
