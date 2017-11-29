const   webpack = require('webpack'),
        path = require('path'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
entry:'./src/app.jsx',
output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
    //publicPath: '/'
},
module: {
    rules: [
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', "es2016", "es2017", 'react']
          }
        }
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      },

]   
},
plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
    title: 'Production',
    template: './src/index.html'
    })
],
};