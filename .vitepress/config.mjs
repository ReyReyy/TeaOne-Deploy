import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "TeaOne",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' }]
  ],
  description: "teaone",
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/server/rules' },
      { text: '团队', link: '/team' }
    ],

    sidebar: [
      {
        text: '服务器',
        items: [
          { text: '简介', link: '/server/intro' },
          { text: '规则', link: '/server/rules' },
          {
            text: '日志',
            collapsed: true,
            items: [
              { text: '2025.12.16', link:'/server/update/2025-12-16' },
              { text: '2025.12.20', link:'/server/update/2025-12-20' },
            ]
          },
        ]
      },
      {
        text: '新手指南',
        collapsed: true,
        items: [
          { text: '下载游戏/启动器', link: '/guide/launcher' },
          { text: '如何进服（IP / 版本 / 模组）', link: '/guide/join' },
        ]
      },
      {
        text: '游戏指令',
        collapsed: true,
        items: [
          {
            text: '常用',
            collapsed: true,
            items: [
              { text: '传送' },
              { text: '重生' },
            ]
          },
          { text: '领地'},
        ]
      },
      {
        text: '服务器系统',
        collapsed: true,
        items: [
          { text: '酿酒系统', link: '/system/brewing/' },
          { text: '领地系统' },
          { text: '签到系统' }
        ]
      },
      {
        text: '常见问题（FAQ）',
        collapsed: true,
        items: [
          { text: '速问速答', link: '/problem/flabbergasted'},
          { text: '无法进入服务器' },
          { text: '丢失连接' },
        ]
      },
      {
        text: '公告',
        collapsed: true,
        items: [
          { text: '暂无' }
        ]
      },
      {
        text: '团队',
        link: '/team'
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present TeaOne Team'
    },

    search: {
      provider: 'local'
    },


    socialLinks: [
      { icon: 'qq', link: 'https://qun.qq.com/universal-share/share?ac=1&authKey=S3%2FTbXhDMgxF%2BrJXBeHeDa%2BHk733mBcgU63jE%2BgOcaRubcHwCkN7A5JgAI3Wc4De&busi_data=eyJncm91cENvZGUiOiIxMDM2OTc5NDQ3IiwidG9rZW4iOiJOZHNZRVRBSkRHbC9qZjVjUS9uT29OZzU1OVVtSmk1OUhkNkZtOWhFS3p6YlFYaW53aTFEaGErUDYzMnJsbVFPIiwidWluIjoiMTU1MzYzODc4MCJ9&data=3wc-qagc5_z5Ez3DwB5avd3g8gyF57iUJC4cRXflng7549SdzKsGKl6iXNzFNyj4_SgXbkNg1K-VeIHhTRWi7w&svctype=4&tempid=h5_group_info' }
    ]
  }
})
