const { merge } = require("webpack-merge");
const main = require("./webpack.config");

module.exports = merge(main, {
    devServer: {
        publicPath: '',
        contentBase: './public',
        port: 3000,
        host: 'localhost',
        hot: true,
    }
});