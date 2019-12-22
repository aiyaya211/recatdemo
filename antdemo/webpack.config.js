const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 创建一个插件的实例
const htmlplugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: './index.html', // 生成在内存中的文件
});


module.exports = {
    mode: 'development',
    plugins: [
        htmlplugin
    ]
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html",
    //         filename: "./index.html"
    //     })
    // ]
    
}