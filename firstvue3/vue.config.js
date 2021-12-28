// const CompressionWebpackPlugin = require("compression-webpack-plugin");
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');

const version = '';
// 环境
const envFlag = process.env.VUE_APP_ENV === 'production' ? 1 : 0;
// 打包资源所在地址
// baseUrl: 't',
const baseUrl = envFlag === 1 ? '' + version + '/dist' : './';
module.exports = {
	publicPath: baseUrl, // 正式
	// baseUrl: './dist', // 编译打包（内网或测试）
	// baseUrl: './',
	outputDir: 'dist',
	assetsDir: 'assets',
	indexPath: 'index.html',
	transpileDependencies: ['pl-table'],
	devServer: {
		// proxy: {
		//   '/restful': {
		//     target: '/', // 请求域名
		//     secure: false, // 如果是https接口，需要配置这个参数
		//     changeOrigin: true, // 如果是跨域访问，需要配置这个参数
		//     pathRewrite: {
		//       '^/restful': '/'
		//     }
		//   },
		//   '/jcgateway': {
		//     target: '', // 请求域名
		//     secure: false, // 如果是https接口，需要配置这个参数
		//     changeOrigin: true, // 如果是跨域访问，需要配置这个参数
		//     pathRewrite: {
		//       '^/jcgateway': '/'
		//     }
		//   }
		// }
	},
	productionSourceMap: !envFlag,
	configureWebpack: config => {
		// config.externals = {
		//   'vue': 'Vue',
		//   'vue-router': 'VueRouter',
		//   'vuex': 'Vuex',
		//   'element-ui': 'ELEMENT',
		//   'axios': 'axios'
		// }
		// config.plugins.push(
		// 	...[
		// 		new LodashModuleReplacementPlugin(),
		// 		// 链接：https://juejin.cn/post/6844904105555525640
		// 		new webpack.ContextReplacementPlugin(
		// 			/moment[/\\]locale$/, // 这个参数表明了我们要改变的打包上下文
		// 			/zh-cn/ // 这个参数表示我们只想打包这个正则匹配的文件
		// 		),
		// 	]
		// );
	},
	// views: {
	// 	index: {
	// 		// ...
	// 		// 在这个页面中包含的块，默认情况下会包含
	// 		// 提取出来的通用 chunk 和 vendor chunk。
	// 		chunks: [
	// 			'echarts',
	// 			'moment',
	// 			'element-ui',
	// 			'xlsx',
	// 			'chunk-vendors',
	// 			'chunk-common',
	// 			'index',
	// 		],
	// 	},
	chainWebpack: config => {
		config.entry.app = ['babel-polyfill', './src/main.js'];
		// config
		// 	.plugin('webpack-bundle-analyzer')
		// 	.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
		config.optimization.splitChunks({
			chunks: 'async',
			minSize: 1024 * 500, // 30000,
			maxSize: 1024 * 1000,
			minChunks: 1,
			maxAsyncRequests: 6, //首页加载的时候引入的文件最多6个
			maxInitialRequests: 5, //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
			automaticNameDelimiter: '~',
			cacheGroups: {
				// 链接：https://juejin.cn/post/6844904105555525640
				moment: {
					name: 'moment',
					test: /[\\/]node_modules[\\/]moment[\\/]/,
					minSize: 0,
					minChunks: 1,
					reuseExistingChunk: true,
					chunks: 'all',
				},
				'ant-design': {
					name: 'ant-design',
					test: /[\\/]node_modules[\\/]ant-design[\\/]/,
					minSize: 0,
					minChunks: 1,
					reuseExistingChunk: true,
					chunks: 'all',
				},
				vendors: {
					name: 'chunk-vendors',
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: 'initial',
				},
				common: {
					name: 'chunk-common',
					minChunks: 2,
					priority: -20,
					chunks: 'initial',
					reuseExistingChunk: true,
				},
			},
		});
		// config.plugins.push(
		// 	...[
		// 		// 链接：https://juejin.cn/post/6844904105555525640
		// 		new webpack.ContextReplacementPlugin(
		// 			/moment[/\\]locale$/, // 这个参数表明了我们要改变的打包上下文
		// 			/zh-cn/ // 这个参数表示我们只想打包这个正则匹配的文件
		// 		),
		// 	]
		// );
	},
	// },
	// transpileDependencies: []
};
