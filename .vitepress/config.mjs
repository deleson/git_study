import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Deleson",
  base: "/git_study/",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      {
        text: 'Python',
        items: [
          { text: 'Python 语法', link: '/python/python' },
          {
            text: 'Python Web',
            items: [
              {
                text: 'Django',
                items: [
                  { text: 'Django 基础', link: '/python/django' },
                  { text: 'Django REST Framework（DRF）', link: '/python/drf' }
                ]
              }
            ]
          },
          {
            text: 'Python AI',
            items: [
              { text: 'PyTorch', link: '/python/pytorch' }
            ]
          },
          { text: 'PyQt5', link: '/python/pyqt5' }
        ],
      },
      {
        text:'前端学习',
        items:[
          {text:"html",link:'/font-end/html'},
          {text:"css",link:'/font-end/css'},
          {text:"javascript",link:'/font-end/js'},
        ]
      },
      {
        text:"书籍阅读",
        items:[
          {text:"利用python进行数据分析",link:'/'}
        ]
      }
    ],

    /*sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      copyright:"2271755156@qq.com"
    },

    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
  
  
     // 设置搜索框的样式
     search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  
  
  }
})
