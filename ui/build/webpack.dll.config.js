const path = require('path');
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const DllPlugin = require('webpack/lib/DllPlugin')
const TerserPlugin = require("terser-webpack-plugin")


module.exports = {
    // 入口文件
    entry: {
        // 项目中用到的依赖库文件
        vendors: ['vue/dist/vue.esm.js', 'vuex', 'vue-router', 'axios'],
        bkMagicVue: ["bk-magic-vue/dist/bk-magic-vue.min.js"],
        jquery: ['jquery'],
        echarts: ['echarts'],
        antv: ['@antv/g2', '@antv/data-set']
    },
    // 输出文件
    output: {
        // 文件名称
        filename: utils.assetsPath('dll/[name].dll.js'),
        // 将输出的文件放到dist目录下
        path: path.resolve(__dirname, config.build.assetsRoot),

        /*
         存放相关的dll文件的全局变量名称，比如对于jquery来说的话就是 _dll_jquery, 在前面加 _dll
         是为了防止全局变量冲突。
        */
        library: '_dll_[name]'
    },
    plugins: [
        // 使用插件 DllPlugin
        new DllPlugin({
            /*
             该插件的name属性值需要和 output.library保存一致，该字段值，也就是输出的 manifest.json文件中name字段的值。
             比如在jquery.manifest文件中有 name: '_dll_jquery'
            */
            name: '_dll_[name]',
            context: path.resolve(__dirname, config.build.assetsRoot, 'static'),
            /* 生成manifest文件输出的位置和文件名称 */
            path: path.join(config.build.assetsRoot, utils.assetsPath('dll/[name].manifest.json'))
        }),
        new TerserPlugin({
            terserOptions: {
                compress: false,
                mangle: true,
                output: {
                    comments: false
                }
            },
            extractComments: false,
            cache: true,
            parallel: true,
            sourceMap: true
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};