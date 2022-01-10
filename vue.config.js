// vue.config.js
module.exports = {
    // 选项...
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '萌鑫教育',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        test:{
            entry: "public/test.js",
            template: 'public/test.html',
            filename: 'test.html',
            title: 'test'
        },


        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/main.js'
    },
    // devServer: { // 环境配置
    //     host: '0.0.0.0',
    //     public:'100.87.52.56:8080',
    //     port: 8080,
    //     https: false,
    //     hotOnly: false,
    //     disableHostCheck:true,
    //     open: true // 配置自动启动浏览器
    //
    // },
    // chainWebpack: config => {
    //     config.module
    //         .rule("html")
    //         .test(/\.html$/)
    //         .use("html-loader")
    //         .loader("html-loader");
    // }


}
