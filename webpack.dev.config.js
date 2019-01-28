/**
 * Created by aresn on 16/7/5.
 */
console.log(1)
var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
console.log(2)
config.devtool = '#source-map';                             // source-map
config.output.publicPath = '/';                        // 资源路径
config.output.filename = '[name].js';                       // 入口js命名
config.output.chunkFilename = '[name].chunk.js';            // 路由js命名
console.log(3)
config.plugins = (config.plugins || []).concat([
    new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true,
        // disable: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.js'
    }),
    new HtmlWebpackPlugin({
        filename: './index.html',
        template: './src/template/index.ejs',
        inject: false
    })
]);
console.log(4)
// 写入环境变量
// fs.open('./src/config/env.js', 'w', function (err, fd) {
//     var buf = 'export default "development";';
//     fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){});
// });

console.log(5)

module.exports = config;