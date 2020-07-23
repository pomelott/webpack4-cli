module.exports = {
    title: 'ts-demo',
    tag: {
        meta: [{
            name: 'webpack4-cli',
            content: 'tsVueDemo'
        }, {
            name: "webpack4-cli",
            content: 'https://github.com/pomelott/webpack4-cli'
        }],
        headLink: [{
            rel: "icon",
            type: "image/png",
            href: 'https://www.tslang.cn/assets/images/icons/android-chrome-192x192.png'
        },{
            href: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.0/animate.min.css',
            rel: "stylesheet"
        }]
    },
    vueInit: {
        el: '#app'
        // entrance: 'example'
    }
}