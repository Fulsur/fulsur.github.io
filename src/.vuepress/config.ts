import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Fulsur",
      description: "Fulsur's Blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Fulsur",
      description: "Fulsur的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
