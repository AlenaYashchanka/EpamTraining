const   webpack = require('webpack'),
path = require('path'),
merge = require('webpack-merge'),
common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080,
        hot: true
        },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});