import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  title: "笔记",
  description: "备忘录",
  locales: {},
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    editLinkText: "编辑此页",
    lastUpdatedText: "最后更新",
    // 贡献者列表 标签的文字
    contributorsText: "贡献者",
    // 是否启用 贡献者列表 。
    contributors: false,
    docsDir: "docs",
    logo: "/logo.png",
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: "https://github.com/linyuxian/blog",
    navbar: [
      // NavbarItem
      {
        text: "基础",
        children: [
          {
            text: "Javascript",
            link: "/basic/javascript",
          },
          {
            text: "框架",
            children: [
              {
                text: "Vue",
                link: "/basic/frame/vue",
              },
              {
                text: "React",
                link: "/basic/frame/react",
              },
            ],
          },
        ],
      },
      // NavbarGroup
      {
        text: "开发工具",
        children: [
          {
            text: "Vscode",
            link: "/ide/",
          },
        ],
      },
      {
        text: "规范",
        link: "/standard",
        children: [
          {
            text: "基础规范",
            link: "/standard/",
          },
          {
            text: "Vue规范",
            link: "/standard/vue",
          },
          {
            text: "Css规范",
            link: "/standard/css",
          },
          {
            text: "Git提交规范",
            link: "/standard/git",
          },
          {
            text: "代码规范",
            children: [
              {
                text: "ESLint",
                link: "/standard/code/eslint",
              },
              {
                text: "prettier",
                link: "/standard/code/prettier",
              },
              {
                text: "husky",
                link: "/standard/code/husky",
              },
            ],
          },
        ],
      },
      {
        text: "常用网站",
        link: "/web",
      },
      {
        text: "面试整理",
        link: "/interview",
      },
      // {
      //   text: "杂七杂八",
      //   link: "/other/",
      // },
    ],
  }),
});
