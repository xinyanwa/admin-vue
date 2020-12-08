module.exports = {
    runtimeCompiler: true,
    devServer: {
        open: false,
        host: "localhost",
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:9000', // 接口的域名
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/api': ''
                }
            }
        },

    },
}
