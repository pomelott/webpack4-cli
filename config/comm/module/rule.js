
const styleRules = require('./styleRules');
const {imgDir} = require('../../tools/path')
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
		use: ["babel-loader?cacheDirectory"],
		// 不检查node_modules下的js文件
		exclude: "/node_modules/",
		// 此处指允许使用 ES6与commonJS的模块化规范
		// parser: {
		// 	// amd: false, //禁用 AMD
		// 	// commonjs: false, // 禁用 CommonJS
		// 	system: false, //禁用 SystemJS
		// 	// harmony: false, // 禁 ES6 import/export 
		// 	// requireinclude: false, //禁用 require .include
		// 	// requireEnsure: false, //禁用 require ensure
		// 	// requireContext: false , // 禁 require.context
		// 	browserify: false, // 禁 browserify
		// 	// requireJs : false, // 禁用 requirejs
		// }
	},
	{
		test: /\.(png|jpe?g|gif)$/i,
		use: [{
				// 需要下载file-loader和url-loader
				loader: "url-loader",
				options: {
					// publicPath: imgDir,
					name: '[name]-[hash:8].[ext]',
					limit: 8192,
					// 图片文件输出的文件夹
					// outputPath: "images",
					// 通过 require(url) 加载图片
					esModule: false,
					outputPath: (url, resourcePath, context) => {
						console.log('------ fuck  1 ----');
						console.log(url);
						console.log(resourcePath);
						// console.log(context);
						let targetPath = resourcePath.match(/(?<=.*?images\/)(.*?\/)(?=\w+\.\w+)/g);
						targetPath = targetPath ? targetPath[0] : '';
						console.log('------ fuck  2 ----');
						console.log(targetPath)
						return `images/${targetPath}${url}`
					  },
				},
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