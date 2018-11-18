const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: ['./src/app/index.js'],
    output: {
        filename: 'app.min.js',
        path: __dirname + '/public',
        
    },
    module: {
        rules: [
            {
				test: /\.js[x]?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-env",
                    "@babel/preset-react"]
				}
			},
          {
            test: /\.scss$/,
            loader: 'style!css!resolve-url!sass?sourceMap'
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
          },
          {
          test:/.jsx?$/,
exclude: /(node_modules|bower_components)/,
use: 'babel-loader'
},
          {
            test:/.(css|sass|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  path:path.resolve (__dirname, 'public'),
                }
              },
              "css-loader"
              
            ]
            
          },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
               name: 'img/[name].[hash:7].[ext]'
            }
         },
         {
          test: /.ts$/,
          use: [
          {
          loader: 'awesome-typescript-loader',
          options: {
          transpileOnly: true
          }
          },
          { loader: 'react-template-loader' },
          { loader: 'react-router-loader' }
          ]
          },
         {
            test: /\.(csv|json)$/,
            use: 'dsv-loader'
        }
        ]
      },
    
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({
            
            filename: "styles.css",
            chunkFilename: "[id].css"
          })
    ]
};

module.exports = config;