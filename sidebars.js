// sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

// 1. 子项配置（仅内部使用，不导出）
const raspberryPiItems = [
  { 
    type: 'doc', 
    id: '树莓派显示屏/5inch_HDMI_Display',
    label: '5inch_HDMI_Display' 
  },
  { 
    type: 'doc', 
    id: '树莓派显示屏/5inch_HDMI_Display-B', 
    label: '5inch_HDMI_Display-B' 
  },
  { 
    type: 'doc', 
    id: '树莓派显示屏/5inch_HDMI_Display-C', 
    label: '5inch_HDMI_Display-C' 
  },
];

const arduinoItems = [
  { 
    type: 'doc', 
    id: 'Arduino显示屏/2.4inch_Arduino_Display', 
    label: '2.4inch_Arduino_Display' 
  },
  { 
    type: 'doc', 
    id: 'Arduino显示屏/2.8inch_Arduino_Display', 
    label: '2.8inch_Arduino_Display' 
  },
  { 
    type: 'doc', 
    id: 'Arduino显示屏/3.5inch_Arduino_Display', 
    label: '3.5inch_Arduino_Display' 
  },
];

// 2. 侧边栏主配置
const sidebars = {
  tutorialSidebar: [ // 这个键就是 sidebarId：tutorialSidebar
    { 
      type: 'doc', 
      id: 'intro',
      label: 'Welcome to LCDwiki' 
    },
    {
      type: 'category',
      label: '树莓派显示屏',
      items: raspberryPiItems,
    },
    {
      type: 'category',
      label: 'Arduino显示屏',
      items: arduinoItems,
    },
    { type: 'link', label: 'GitHub', href: 'https://github.com/QDTFT/LCDwiki' },
  ],
};

// 🔴 核心修正：仅默认导出 sidebars 对象（不导出其他变量）
module.exports = sidebars;

// 🔴 新增：单独导出子项（供导航栏使用，不影响侧边栏解析）
module.exports.raspberryPiItems = raspberryPiItems;
module.exports.arduinoItems = arduinoItems;