import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: process.env.BLOG_SITE_URL || 'http://localhost:4859/',
  lang: 'zh-CN',
  title: 'Valaxy Theme Yun',
  author: {
    name: '本居小铃',
  },
  description: 'Valaxy Theme Yun Preview.',
  social: [
    { name: 'RSS', link: '', icon: 'i-ri-rss-line', color: 'orange' },
    { name: 'QQ 群 1050458482', link: '', icon: 'i-ri-qq-line', color: '#12B7F5' },
    { name: 'GitHub', link: '', icon: 'i-ri-github-line', color: '#6e5494' },
    { name: '微博', link: '', icon: 'i-ri-weibo-line', color: '#E6162D' },
    { name: '豆瓣', link: '', icon: 'i-ri-douban-line', color: '#007722' },
    { name: '网易云音乐', link: '', icon: 'i-ri-netease-cloud-music-line', color: '#C20C0C' },
    { name: '知乎', link: '', icon: 'i-ri-zhihu-line', color: '#0084FF' },
    { name: '哔哩哔哩', link: '', icon: 'i-ri-bilibili-line', color: '#FF8EB3' },
    { name: '微信公众号', link: '', icon: 'i-ri-wechat-2-line', color: '#1AAD19' },
    { name: 'Twitter', link: '', icon: 'i-ri-twitter-x-fill', color: 'black' },
    { name: 'Telegram Channel', link: '', icon: 'i-ri-telegram-line', color: '#0088CC' },
    { name: 'E-Mail', link: '', icon: 'i-ri-mail-line', color: '#8E71C1' },
    { name: 'Travelling', link: '', icon: 'i-ri-train-line', color: 'var(--va-c-text)' },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
