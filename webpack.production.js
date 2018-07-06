
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = function () {

    var configs = require('./webpack.development.js')();

    configs.forEach(function(config){
        config.devtool=false;
        config.plugins.push(new CleanWebpackPlugin(['dist/*']));
        config.plugins.push(new UglifyJSPlugin({
            uglifyOptions: {
                warnings: false,
                beautify: false,
                compress: true,
                minimize: true,
                comments: false
            }
          
        }))
        
    });

    return configs;
}