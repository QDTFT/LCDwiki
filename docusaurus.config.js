/**
 * LCDwiki 最终版 Docusaurus 配置文件
 */
/** @type {import('@docusaurus/types').Config} */

// 1. 正确导入子项（sidebars.js 已单独导出）
const sidebars = require('./sidebars.js');
const { raspberryPiItems, arduinoItems } = sidebars;

// 2. 转换函数（把 id 转为 docId）
const convertToNavItems = (sidebarItems) => {
  if (!Array.isArray(sidebarItems)) return [];
  return sidebarItems.map(item => ({
    type: 'doc',
    docId: item.id,
    label: item.label
  }));
};

// 3. 生成导航栏子项
const raspberryPiNavItems = convertToNavItems(raspberryPiItems);
const arduinoNavItems = convertToNavItems(arduinoItems);

const config = {
  title: 'LCDwiki',
  tagline: 'LCD 硬件与驱动开发知识库',
  favicon: 'img/favicon.ico',

  url: 'https://QDTFT.github.io',
  baseUrl: '/LCDwiki/',
  projectName: 'LCDwiki',
  organizationName: 'QDTFT',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // 修复断链检查配置（修正 onBrokenMarkdownLinks 位置）
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn', // 移到根配置，而非 markdown.hooks 下

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      "zh-Hans": {
        label: '简体中文',
        // 移除多余的 path 配置（baseUrl 已包含 /LCDwiki/）
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
      en: {
        label: 'English',
        path: 'en', // 英文路由前缀是 /en
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs', // 中文文档目录
          routeBasePath: '/', // 中文文档路由根路径（关键：docs 直接映射到 /）
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/QDTFT/LCDwiki/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'LCDwiki',
      logo: {
        alt: 'LCDwiki Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // 匹配 sidebars 对象内部的键
          position: 'left',
          label: '所有文档',
        },
        // 树莓派显示屏下拉菜单
        {
          type: 'dropdown',
          label: '树莓派显示屏',
          position: 'left',
          className: 'navbar-dropdown-hover',
          items: raspberryPiNavItems,
        },
        // Arduino显示屏下拉菜单
        {
          type: 'dropdown',
          label: 'Arduino显示屏',
          position: 'left',
          className: 'navbar-dropdown-hover',
          items: arduinoNavItems,
        },
        { type: 'search', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
          localeDropdownProps: {
            languages: [
              { code: 'zh-Hans', label: '中文（简体）' },
              { code: 'en', label: 'English' },
            ],
          },
        },
        {
          href: 'https://github.com/QDTFT/LCDwiki',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '所有文档',
          items: [
            // 修复核心断链：/docs/intro → /intro（因为 routeBasePath: '/'）
            { label: '快速入门', to: '/intro' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LCDwiki, Built with Docusaurus.`,
    },

    algolia: {
      appId: 'YOUR_ALGOLIA_APP_ID',
      apiKey: 'YOUR_ALGOLIA_SEARCH_KEY',
      indexName: 'lcdwiki',
      contextualSearch: true,
    },

    prism: {
      additionalLanguages: ['c', 'cpp', 'python', 'bash'],
    },

    breadcrumbs: {
      hideOnDocSidebarNav: false,
    },
  },

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],
};

module.exports = config;