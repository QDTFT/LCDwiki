/**
 * LCDwiki 最终版 Docusaurus 配置文件
 */
/** @type {import('@docusaurus/types').Config} */

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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      "zh-Hans": {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
      en: {
        label: 'English',
        path: 'en',
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
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
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
        { to: '/', position: 'left', label: '所有文档' },
        {
          type: 'dropdown',
          label: '树莓派显示屏',
          position: 'left',
          items: [
            { type: 'doc', docId: 'RaspberryPi-Display/DSI/4.3inch DSI4361', label: '4.3inch DSI4361' },
            { type: 'doc', docId: 'RaspberryPi-Display/DSI/5inch DSI5061', label: '5inch DSI5061' },
            { type: 'doc', docId: 'RaspberryPi-Display/DSI/7inch DSI7062', label: '7inch DSI7062' },
            { type: 'doc', docId: 'RaspberryPi-Display/GPIO/3.2inch MPI3201', label: '3.2inch MPI3201' },
            { type: 'doc', docId: 'RaspberryPi-Display/GPIO/3.5inch MHS3501', label: '3.5inch MHS3501' },
            { type: 'doc', docId: 'RaspberryPi-Display/GPIO/3.5inch MPI3501', label: '3.5inch MPI3501' },
            { type: 'doc', docId: 'RaspberryPi-Display/HDMI/5inch_HDMI_A_MPI5008', label: '5inch HDMI-A' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Arduino显示屏',
          position: 'left',
          items: [
            { type: 'doc', docId: 'Arduino-Display/2.4inch_Arduino_Display', label: '2.4inch Arduino Display' },
            { type: 'doc', docId: 'Arduino-Display/2.8inch_Arduino_Display', label: '2.8inch Arduino Display' },
            { type: 'doc', docId: 'Arduino-Display/3.5inch_Arduino_Display', label: '3.5inch Arduino Display' },
          ],
        },
        {
          type: 'dropdown',
          label: 'ESP32显示屏',
          position: 'left',
          items: [
            { type: 'doc', docId: 'ESP32-Display/2.8inch_ILI9341_E32R28T', label: '2.8inch ILI9341' },
            { type: 'doc', docId: 'ESP32-Display/2.8inch_ST7789_E32R28T-1', label: '2.8inch ST7789' },
          ],
        },
        {
          type: 'dropdown',
          label: 'SPI显示屏',
          position: 'left',
          items: [
            { type: 'doc', docId: 'SPI-Display/2.2inch MSP2201', label: '2.2inch MSP2201' },
            { type: 'doc', docId: 'SPI-Display/2.4inch MSP2401', label: '2.4inch MSP2401' },
            { type: 'doc', docId: 'SPI-Display/2.8inch MSP2806', label: '2.8inch MSP2806' },
            { type: 'doc', docId: 'SPI-Display/3.2inch MSP3201', label: '3.2inch MSP3201' },
            { type: 'doc', docId: 'SPI-Display/3.5inch MSP3501', label: '3.5inch MSP3501' },
          ],
        },
        { type: 'search', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
        { href: 'https://github.com/QDTFT/LCDwiki', label: 'GitHub', position: 'right' },
      ]
    },

    // ====================== 已修复：完美页脚 ======================
    footer: {
      style: 'dark',
      links: [
        {
          title: '客户服务',
          items: [
            { label: '解决方案', to: '#' },
            { label: '技术支持', to: '#' },
            { label: '联系我们', to: '#' },
          ],
        },
        {
          title: '产品选型',
          items: [
            { label: 'QDTFT全动电子官网', href: 'http://www.qdtft.com/' },
            { label: '淘宝', href: 'https://shop35639579.taobao.com/' },
            { label: 'LCDWIKI', href: 'https://www.LCDwiki.com' },
          ],
        },
        {
          title: '社区',
          items: [
            { label: 'QQ Group', href: '#' },
            { label: 'Discord', href: '#' },
            { label: 'Facebook', href: '#' },
            { label: 'Bilibili', href: '#' },
            { label: 'YouTube', href: '#' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '新闻动态', to: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'cnb.cool', href: '#' },
          ],
        },
      ],
      logo: {
        alt: 'LCDWIKI Logo',
        src: 'img/logo.png',
        href: '/',
      },
      copyright: 'Copyright © ' + new Date().getFullYear() + ' ShenZhen QDTFT electronic Technology, Inc. All rights reserved.',
    },

    prism: { additionalLanguages: ['c', 'cpp', 'python', 'bash'] },
    breadcrumbs: { hideOnDocSidebarNav: false },
  },

  plugins: ['docusaurus-plugin-image-zoom'],
};

module.exports = config;