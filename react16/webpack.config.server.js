const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');

const isProduction = true; //process.env.NODE_ENV === 'production';
const productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
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
    entry: './server/index.js',
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
    plugins: productionPluginDefine.concat([
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]),
    resolve: {
      extensions: [' ', '.js', '.jsx', '.css']
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