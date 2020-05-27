const extractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV;

const ruleMap = {
    css: {
        development: ['vue-style-loader','style-loader', 'css-loader', 'postcss-loader'],
        production: extractTextPlugin.extract({
          fallback: "style-loader",
          use: ['vue-style-loader', "css-loader", "postcss-loader"],
          // css中的基础路径
          publicPath: "../"
        })
    },
    sass: {
        development: ['style-loader', 'css-loader', 'sass-loader'],
        production: extractTextPlugin.extract({
            	fallback:"style-loader",
            	use: ["css-loader", "sass-loader"]
        })
    },
    less: {
        development: ['style-loader', 'css-loader', 'less-loader'],
        production: extractTextPlugin.extract({
            	fallback:"style-loader",
            	use: ["css-loader", "less-loader"]
        })
    }
}
let ruleAdd = [
    {
      test: /\.css$/,
      use: ruleMap.css[env]
    },
    {
      test: /\.(scss|sass)$/,
      use: ruleMap.sass[env]
    },
    {
      test: /\.less$/,
      use: ruleMap.less[env]
	  }
]

module.exports = ruleAdd;