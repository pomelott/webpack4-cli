
const styleRules = require('./styleRules');
console.log('---------- styleRules ------------');
console.log(styleRules)
const Rules = [
	
	{
		test: /\.vue$/, 
		loader: 'vue-loader',
		exclude: /node_modules/  
	},
	{
		test: /\.js$/,
		use: ["babel-loader"],
		// 不检查node_modules下的js文件
		exclude: "/node_modules/"
	},
	{
		test: /\.(png|jpg|gif)$/,
		use: [{
				// 需要下载file-loader和url-loader
				loader: "url-loader",
				options: {
					limit: 50,
					// 图片文件输出的文件夹
					outputPath: "images"
				}
			}
		]
	},
	{
		test: /\.html$/,
		// html中的img标签
		use: ["html-withimg-loader"]
	},
	{
		test: /\.pug$/,
		use: ['html-loader', 'pug-html-loader']
	},
	...styleRules
	
]
module.exports = Rules;