const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    proxy: {
      '/kweb': { //拦截上下文
        target: 'https://pvp.qq.com/', //匹配到要代理的上下文后，将上下文前面的地址替换为此代理地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/kweb': '' //拦截到的上下文重写，这里可以将 kweb 重写为空或者其它值，因为我不需要重写，所以这里这么配置。
        }
      }
    }
  }
})