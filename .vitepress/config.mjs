import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Deleson",
    base: "/git_study/",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outlineTitle: "目录",
        outline: [1, 6],
        nav: [
            {
                text: '数据存储和处理技术',
                items: [
                    {text: 'Redis', link: '/study_md/database/Redis7实战'},
                    {text: 'Mysql', link: '/study_md/database/Mysql'},

                ],
            },
            {
                text: 'Python自动化',
                items: [
                    {text: 'pyautogui', link: '/study_md/python自动化/pyautogui'},

                ],
            },
            {
                text: 'Python',
                items: [
                    {text: 'Python 基础语法', link: '/study_md/python/python'},

                ],
            },
            {
                text: 'Python Web',
                items: [
                    {text: 'Django基础', link: '/study_md/django/drf/django'},
                    {text: 'Django REST Framework（DRF）', link: '/study_md/django/drf/drf'},
                    {text: 'vue+DRF+django', link: '/study_md/django/drf/drf_vue'},
                ]
            },

            {
                text: 'Python AI',
                items: [
                    {text: 'PyTorch', link: '/study_directory/python/pytorch'}
                ]
            },

            {
                text: '前端',
                items: [
                    {text: 'Vue3', link: '/study_md/front_end/Vue3'},
                    {text: 'javascript', link: '/study_md/front_end/javascript'},
                    {text: 'css', link: '/study_md/front_end/css'},
                    {text: 'html', link: '/study_md/front_end/html'},
                ]
            },
            {
                text: '面试经验',
                items: [
                    {text: 'python八股文', link: '/study_md/面试经验/python八股文'},
                ]
            },
            {
                text: '书籍阅读',
                items: [
                    {text: '利用python进行数据分析', link: '/study_md/book/利用python进行数据分析'},
                    {text: 'Python编程快速上手_让繁琐工作自动化', link: '/study_md/book/利用python进行数据分析'}
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
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        footer: {
            copyright: "2271755156@qq.com"
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
