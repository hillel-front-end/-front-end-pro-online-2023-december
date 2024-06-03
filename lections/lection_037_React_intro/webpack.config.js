const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        '@babel/preset-env',
        "@babel/preset-react"
      ]
    }
  }
}

module.exports = (env) => {
  const mode = env.NODE_ENV;
  const devServer =  { port: 4000,  open: true };


  return  {
    mode,
    entry: {
      app: path.resolve(__dirname, 'src', 'main.js'),
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '.[name].[contenthash].bundle.js',
      clean: true
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
      }),

    ],

    module: {
      rules: [babelLoader]
    },

    devServer
  };
}
