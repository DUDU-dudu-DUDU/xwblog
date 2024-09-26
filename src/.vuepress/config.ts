import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/xwblog/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "xiaowu Blog",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "小吴 Blog",
      description: "xiaowu blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
