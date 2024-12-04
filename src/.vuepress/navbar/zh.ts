import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: '全站速览',
    icon: 'shouye',
    children: ['/posts/catalog.html', '/program/', '/skill/', '/tools/'],
  },
  {
    text: '分类',
    icon: 'youxi',
    children: [
      { text: '全部', icon: 'fenlei', link: '/article/' },
      { text: '分类', icon: 'a-appround24', link: '/category/' },
      { text: '标签', icon: 'a-appround13', link: '/tag/' },
      { text: '时间轴', icon: 'shijianzhou', link: '/timeline/' },
    ],
  },
  {
    text: "小心情",
    icon: "a-appround26",
    children: ['/mood/share/', '/mood/notes/'],
  },
  '/about/',
]);
