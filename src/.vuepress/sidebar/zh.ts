import { sidebar } from "vuepress-theme-hope";

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
};

const back_program = {
  text: '返回编程',
  icon: 'developer',
  link: '/program/',
};


export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "博文",
      icon: "book",
      prefix: "posts/",
      link: "/posts/",
      children: "structure",
    },
    {
      text: "编程",
      icon: "book",
      prefix: "program/",
      link: "/program/",
      children: "structure",
    },
    {
      text: "技巧",
      icon: "book",
      prefix: "skill/",
      link: "/skill/",
      children: "structure",
    },
    {
      text: "工具",
      icon: "book",
      prefix: "tools/",
      link: "/tools/",
      children: "structure",
    },
    {
      text: "小心情",
      icon: "book",
      prefix: "mood/",
      link: "/mood/",
      children: "structure",
    },
  ],

  '/program/': [
    back_posts,
    {
      text: '编程',
      icon: 'zhifeiji',
      children: 'structure',
      link: '/program/',
    },
  ],
  '/program/java/': [
    back_program,
    {
      text: 'JAVA',
      icon: 'basic',
      link: '/program/java/',
      children: 'structure',
    },
  ],
  '/program/linux/': [
    back_program,
    {
      text: 'LINUX',
      icon: 'basic',
      link: '/program/linux/',
      children: 'structure',
    },
  ],

  '/mood/': [
    back_posts,
    {
      text: '动漫',
      icon: 'zhifeiji',
      children: 'structure',
      prefix: 'anime/',
      link: '/mood/anime/',
    },
  ],




});
