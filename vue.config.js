const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { proxyConfig } = require("./config/dev.proxy");

module.exports = {
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
    port: 4000,
    hot: true,
    proxy: {
      ...proxyConfig,
    },
  },
  css: {
    loaderOptions: {
        postcss: {
          postcssOptions: {
            plugins: [
                require('postcss-pxtorem')({rootValue: 192, propList: ['*']}),
            ]
          }
        }
    }
},
};
