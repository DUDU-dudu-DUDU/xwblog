import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: '全站速览',
    icon: 'zhifeiji',
    children: ['/posts/catalog.html', '/program/', '/skill/', '/tools/'],
  },
  {
    text: '分类',
    icon: 'zhifeiji',
    children: [
      { text: '全部', icon: 'list', link: '/article/' },
      { text: '分类', icon: 'category', link: '/category/' },
      { text: '标签', icon: 'tag', link: '/tag/' },
      { text: '时间轴', icon: 'time', link: '/timeline/' },
    ],
  },
  {
    text: "小心情",
    icon: "zhifeiji",
    children: ['/mood/anime/'],
  },
  '/about/',
]);
