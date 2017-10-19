var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

// var CleanWebpackPlugin = require('clean-webpack-plugin');
// var AssetsPlugin = require('assets-webpack-plugin');
//hbs公共资源编译路径

function rdom() {
    var rdm = Math.floor(Math.random() * 20 + 1);
    if (rdm < 10) {
        rdm = 'http://cdn' + '0' + rdm.toString() + '.ttpaicdn.com';
    } else {
        rdm = 'http://cdn' + rdm.toString() + '.ttpaicdn.com';
    }
    return '';
}
module.exports = {
    entry: {        
        index:'./public/js/index.js',
        user:'./public/js/user.js'
    },
    output: {
        path: path.join(__dirname, './public/dist/'),
        filename: 'js/[name].js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },{ 
            test: /\.js$/,
            exclude: /node_modules/, 
            loader: 'babel'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=10000&name=images/[name].[ext]'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?name=fonts/[name].[ext]"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?name=fonts/[name].[ext]"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?name=fonts/[name].[ext]"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?name=fonts/[name].[ext]"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?name=svg/[name].[ext]"
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime','transform-object-rest-spread','babel-polyfill']
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.HotModuleReplacementPlugin() //热加载
        // new AssetsPlugin({
        //     filename: 'headline_h5.map.json',
        //     path: dist,
        //     prettyPrint: true,
        //     fullPath: true,
        //     processOutput: function(assets) {
        //         var now = Date.now();

        //         for (var i in assets) {

        //             for (var j in assets[i]) {

        //                 assets[i][j] = assets[i][j] + "?v=" + now.toString();
        //             }

        //         }
        //         return JSON.stringify(assets);
        //     }
        // })
    ],
    //使用webpack-dev-server，提高开发效率
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 5000, //默认8080
        inline: true, //可以监控js变化
        hot: true, //热启动
    }
}
