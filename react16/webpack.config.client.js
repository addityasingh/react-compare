const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');

const isProduction = true; //process.env.NODE_ENV === 'production';
const productionPluginDefine = [];
const commonLoaders = [
    {
        test: /\.json$/,
        use: ['json-loader']
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        "css-loader"
      ]
    }
];
  
module.exports = [{
    entry: './client/index.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'main.bundle.js',
      chunkFilename: '[name].bundle.js',
      publicPath: '/'
    },
    // externals: nodeExternals(),
    plugins: productionPluginDefine.concat([
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ]),
    target: "web",
    resolve: {
      extensions: [' ', '.js', '.jsx', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader']
        }
      ].concat(commonLoaders)
    }
  }];