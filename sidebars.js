// @ts-check
const sidebars = {
  tutorialSidebar: [
    "index",

    {
      type: "category",
      label: "LCDwiki 显示屏文档",
      link: {
        type: "generated-index",
        slug: "/category",
        title: "LCDwiki 显示屏文档知识库"
      },
      items: [
        {
          type: "category",
          label: "RaspberryPi Display",
          link: { type: "generated-index" },
          items: [
            {
              type: "category",
              label: "HDMI",
              items: [
                "RaspberryPi-Display/HDMI/5inch_HDMI_A_MPI5008",
                "RaspberryPi-Display/HDMI/5inch_HDMI_B_MPI5001",
                "RaspberryPi-Display/HDMI/5inch_HDMI_C_MPI5005",
                "RaspberryPi-Display/HDMI/5inch_HDMI_D_MPI5006",
              ]
            },
            {
              type: "category",
              label: "DSI",
              items: [
                "RaspberryPi-Display/DSI/4.3inch DSI4361",
                "RaspberryPi-Display/DSI/5inch DSI5061",
                "RaspberryPi-Display/DSI/7inch DSI7062",
              ]
            },
            {
              type: "category",
              label: "GPIO",
              items: [
                "RaspberryPi-Display/GPIO/3.2inch MPI3201",
                "RaspberryPi-Display/GPIO/3.5inch MHS3501",
                "RaspberryPi-Display/GPIO/3.5inch MPI3501",
              ]
            },
            
          ]
        },
        {
          type: "category",
          label: "Arduino Display",
          link: { type: "generated-index" },
          items: [
            "Arduino-Display/2.4inch_Arduino_Display",
            "Arduino-Display/2.8inch_Arduino_Display",
            "Arduino-Display/3.5inch_Arduino_Display",
          ]
        },
        {
          type: "category",
          label: "ESP32 Display",
          link: { type: "generated-index" },
          items: [
            "ESP32-Display/2.8inch_ILI9341_E32R28T",
            "ESP32-Display/2.8inch_ST7789_E32R28T-1",
          ]
        },
        
        {
          type: "category",
          label: "SPI Display",
          link: { type: "generated-index" },
          items: [
            "SPI-Display/2.2inch MSP2201",
            "SPI-Display/2.4inch MSP2401",
            "SPI-Display/2.8inch MSP2806",
            "SPI-Display/3.2inch MSP3201",
            "SPI-Display/3.5inch MSP3501",
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;