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
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'client.js',
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
    //   modules: [
    //     path.resolve('./client/components')
    //   ]
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