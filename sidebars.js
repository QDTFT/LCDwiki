// sidebars.js - 最简可用版本（无版本依赖、无语法错误）
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // 唯一侧边栏 ID（与 docusaurus.config.js 中 docs.sidebarPath 匹配）
  tutorialSidebar: [
    // 一级菜单：快速入门
    {
      type: 'doc',
      id: 'intro', // 对应 docs/intro.md 文件
      label: '简介',
    },
    // 一级菜单：目录分组示例
    {
      type: 'category',
      label: 'LCD 硬件基础',
      items: [
        { type: 'doc', id: 'hardware/overview', label: '硬件概述' },
        { type: 'doc', id: 'hardware/pinout', label: '引脚定义' },
      ],
    },
    // 外部链接
    {
      type: 'link',
      label: 'GitHub',
      href: 'https://github.com/QDTFT/LCDwiki',
    },
  ],
};

module.exports = sidebars;