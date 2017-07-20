var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './source/polyfills.ts',
    'vendor': './source/vendor.ts',
    'app1': './source/app1.ts',
    'app2': './source/app1.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [

      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          //'babel-loader?presets[]=es2015', 
          'angular2-template-loader',
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      // {
      //   test: /\.less$/,
      //   // loader: "style-loader!css-loader!less-loader"
      //   loaders: ['style-loader', 'css-loader', 'less-loader']
      // },
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('source'),
      //   loader: null
      // },
      {
        test: /\.css$/,
        include: helpers.root('source'),
        loader: 'raw'
      },
       {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
    ]
  },

  plugins: [ 
    
    new ExtractTextPlugin("[name].css"),

    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'source/template-pages/app1.html',
      chunks: ['app1', 'vendor', 'polyfills']

     }),
    new HtmlWebpackPlugin({
      filename:'app2.html',
      chunks:['app2', 'vendor', 'polyfills'],
      template: 'source/template-pages/app2.html'
    })
  ]
};