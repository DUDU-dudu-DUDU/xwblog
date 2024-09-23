import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/xwblog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "xiaowu Blog",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "小吴博客",
      description: "xiaowu blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
