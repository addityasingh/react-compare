const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const isProduction = true; //process.env.NODE_ENV === 'production';
const productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
const commonLoaders = [
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];
  
module.exports = [{
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
    plugins: productionPluginDefine,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ].concat(commonLoaders)
    }
  }];