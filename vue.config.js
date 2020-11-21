const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    //部署应用包时的基本 URL
    // publicPath: process.env.NODE_ENV === 'production' ? '/online/' : './',

    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.

        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    devServer: {
        port: 8081, // 端口号
        // host: 'localhost', // 'localhost'
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // ... your configs
        disableHostCheck: true // 加上这段,
            // before: require('./mock/mock-server.js')
    },
    chainWebpack(config) {
        // 设置 svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons')) //默认url-loader打包集排除了对这个文件夹svg格式的打包
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons')) //使用这个loader打包svg
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}