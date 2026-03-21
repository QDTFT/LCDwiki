/**
 * LCDwiki 最终版 Docusaurus 配置文件
 * 适配：QDTFT/LCDwiki 仓库
 * 包含：多语言、Algolia 搜索、对标站风格、无依赖报错
 */
/** @type {import('@docusaurus/types').Config} */
const config = {
  // 基础站点信息
  title: 'LCDwiki',
  tagline: 'LCD 硬件与驱动开发知识库',
  favicon: 'img/favicon.ico', // 可替换为你的 favicon 路径

  // 部署核心配置（必须匹配你的 GitHub 信息）
  url: 'https://QDTFT.github.io',
  baseUrl: '/LCDwiki/',
  projectName: 'LCDwiki',
  organizationName: 'QDTFT',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // 错误处理策略
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 多语言配置（简体/繁体/英文）
  i18n: {
    defaultLocale: 'zh-Hans', // 默认简体中文
    locales: ['zh-Hans', 'zh-Hant', 'en'], // 支持的语言列表
    localeConfigs: {
      "zh-Hans": { // 修复：用引号包裹含连字符的属性名
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      "zh-Hant": { // 修复：用引号包裹含连字符的属性名
        label: '繁體中文',
        direction: 'ltr',
        htmlLang: 'zh-TW',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  // 核心预设配置（无版本冲突）
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/QDTFT/LCDwiki/edit/main/', // 文档编辑链接
          showLastUpdateTime: true, // 显示最后更新时间
          showLastUpdateAuthor: true, // 显示最后更新作者
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/QDTFT/LCDwiki/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // 自定义样式
        },
      },
    ],
  ],

  // 主题配置（对标站风格 + 搜索 + 多语言）
  themeConfig: {
    // 暗黑模式（对标站默认暗黑）
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // 导航栏配置
    navbar: {
      title: 'LCDwiki',
      logo: {
        alt: 'LCDwiki Logo',
        src: 'img/logo.svg', // 可替换为你的 logo 路径
      },
      items: [
        // 文档入口
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        // 博客入口
        { to: '/blog', label: '博客', position: 'left' },
        // 社区入口
        {
          href: 'https://github.com/QDTFT/LCDwiki/discussions',
          label: '社区',
          position: 'left',
        },
        // 多语言切换器（右侧）
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://github.com/QDTFT/LCDwiki',
              label: '帮助翻译',
            },
          ],
        },
        // GitHub 链接
        {
          href: 'https://github.com/QDTFT/LCDwiki',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },

    // 页脚配置（对标站风格）
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速入门',
              to: '/docs/intro',
            },
            {
              label: 'LCD 驱动开发',
              to: '/docs/category/lcd-驱动开发',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/QDTFT/LCDwiki/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/QDTFT/LCDwiki/issues',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/QDTFT/LCDwiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LCDwiki, Built with Docusaurus.`,
    },

    // Algolia 搜索配置（替换为你的密钥）
    algolia: {
      appId: 'YOUR_ALGOLIA_APP_ID', // 替换：Algolia 审核通过后提供
      apiKey: 'YOUR_ALGOLIA_SEARCH_KEY', // 替换：Search-only API Key
      indexName: 'lcdwiki', // 替换：你的 Algolia 索引名
      contextualSearch: true, // 上下文搜索（对标站开启）
    },

    // 代码高亮（无第三方依赖，内置样式）
    prism: {
      additionalLanguages: ['c', 'cpp', 'python', 'bash'], // LCD 开发常用语言
    },

    // 面包屑导航（对标站功能）
    breadcrumbs: {
      hideOnDocSidebarNav: false,
    },
  },

  // 插件配置（无重复、无缺失依赖）
  plugins: [
    // 图片缩放插件（对标站功能）
    'docusaurus-plugin-image-zoom',
    // 可选：本地 Algolia 爬虫插件（申请官方 DocSearch 则注释）
    /*
    [
      '@docusaurus/plugin-algolia-docsearch',
      {
        appId: 'YOUR_ALGOLIA_APP_ID',
        apiKey: 'YOUR_ALGOLIA_ADMIN_KEY', // Admin API Key（用于爬取）
        indexName: 'lcdwiki',
        crawlDelay: 30,
        startUrls: ['https://qdtft.github.io/LCDwiki/'],
      },
    ],
    */
  ],
};

module.exports = config;