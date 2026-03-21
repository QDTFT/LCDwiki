// docusaurus.config.js
module.exports = {
  title: 'LCDwiki', // 可自定义站点标题
  tagline: 'LCD 相关文档知识库', // 可自定义站点副标题
  favicon: 'img/favicon.ico', // 如有 favicon 可配置，无则删除

  // 核心部署配置（根据你的信息固定）
  url: 'https://QDTFT.github.io',
  baseUrl: '/LCDwiki/', // 仓库名非用户名，必须加 /LCDwiki/
  projectName: 'LCDwiki', // GitHub 仓库名
  organizationName: 'QDTFT', // GitHub 用户名
  deploymentBranch: 'gh-pages', // 固定为 gh-pages
  trailingSlash: false, // 避免路径跳转问题

  // 其他原有配置（主题、插件等）保持不变
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/QDTFT/LCDwiki/edit/main/', // 文档编辑链接
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/QDTFT/LCDwiki/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // 导航栏配置（可自定义）
    navbar: {
      title: 'LCDwiki',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/QDTFT/LCDwiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '入门指南',
              to: '/docs/intro',
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
  },
};