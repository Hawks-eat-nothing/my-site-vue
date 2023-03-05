const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 8084,
    proxy:{
      '/api':{
        target:'http://localhost:8085',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
})
