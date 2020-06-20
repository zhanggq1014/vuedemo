module.exports = {
  //配置文件夹别名
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/asserts',
        components: '@/components',
        views: '@/views'
      }
    }
  },
  devServer: {
       //解决跨域
      //  /api相当于"http://localhost:20000/mock/5ecdbe574f092530605fc10b"

    // /api/getMenu相当于 http://localhost:20000/mock/5ecb6b8eb48e2430fc65550d/getMenu    // /api相当于http://localhost:20000/mock/5ecb6b8eb48e2430fc65550d
    proxy: {
      '/api': {
        target: 'http://localhost:20000/mock/5ecdbe574f092530605fc10b', // 要代理的域名
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '' // 路径重写
        }
      }
    },

  // network外网
  // public: '0.0.0.0:8080',
  host: '0.0.0.0',
  public:'192.168.1.140:8080',
  port: 8080,
  },




}
