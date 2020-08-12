const _ = require('lodash');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        react: ['react', 'react-dom'],
        vue: ["vue", "vue-router"],
        babel: ["@babel/polyfill"]
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../../dllOutput'),
        library: "dll-[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: "dll-[name]",
			path: path.resolve(__dirname, "../../dllOutput/json/dll-[name].json")
		})
    ]
}