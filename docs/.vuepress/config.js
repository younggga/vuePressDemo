module.exports = {
    title: 'zzz\'s blog',//主标题
    port: 2333,//开发环境端口
    description: 'day day down!',//副标题
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        [ 'link', { rel: 'icon', href: '/images/logo.ico' } ],
        [ 'link', { rel: 'manifest', href: '/images/logo.ico' } ],
        [ 'link', { rel: 'apple-touch-icon', href: '/images/logo.ico' } ],
        [ 'meta', { 'http-quiv': 'pragma', cotent: 'no-cache' } ],
        [ 'meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' } ],
        [ 'meta', { 'http-quiv': 'expires', cotent: '0' } ]
    ],
    evergreen: true,//浏览器兼容性
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 部署到github相关的配置,部署到git的分支
    markdown: {
        lineNumbers: true, // 代码块是否显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: 'one', link: '/one/' },
            {
                text: 'two', items: [
                    { text: 'one', link: '/two/one' },
                    { text: 'two', link: '/two/two' },
                ]
            },
            { text: 'Github', link: 'https://github.com/younggga/vuePressDemo' }
        ],
        lastUpdated: '最后编辑',
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2
    }
};
