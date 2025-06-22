import { sidebar } from "vuepress-theme-hope";

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
};

const back_program = {
  text: '返回编程',
  icon: 'a-appround6',
  link: '/program/',
};

const back_mood = {
  text: '返回小心情',
  icon: 'a-appround26',
  link: '/mood/',
};


export const zhSidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "博文",
      icon: "rijibenjilu",
      prefix: "posts/",
      link: "/posts/",
      children: "structure",
    },
    {
      text: "编程",
      icon: "a-appround6",
      prefix: "program/",
      link: "/program/",
      children: "structure",
    },
    {
      text: "技巧",
      icon: "a-dengpaowulichuangxin",
      prefix: "skill/",
      link: "/skill/",
      children: "structure",
    },
    {
      text: "工具",
      icon: "gongju",
      prefix: "tools/",
      link: "/tools/",
      children: "structure",
    },
    {
      text: "小心情",
      icon: "a-appround26",
      prefix: "mood/",
      link: "/mood/",
      children: "structure",
    },
  ],

  '/program/': [
    back_posts,
    {
      text: '编程',
      icon: 'a-appround6',
      children: 'structure',
      link: '/program/',
    },
  ],
  '/program/java/': [
    back_program,
    {
      text: 'Java',
      icon: 'basic',
      link: '/program/java/',
      children: 'structure',
    },
  ],
  '/program/netty/': [
    back_program,
    {
      text: 'Netty',
      icon: 'basic',
      link: '/program/netty/',
      children: 'structure',
    },
  ],
  '/program/linux/': [
    back_program,
    {
      text: 'Linux',
      icon: 'basic',
      link: '/program/linux/',
      children: 'structure',
    },
  ],

  '/mood/': [
    back_posts,
    {
      text: '小心情',
      icon: 'a-appround26',
      children: 'structure',
      link: '/mood/',
    },
  ],
  '/mood/share/': [
    back_mood,
    {
      text: '分享',
      icon: 'a-appround42',
      children: 'structure',
      link: '/mood/share/',
    },
  ],
  '/mood/notes/': [
    back_mood,
    {
      text: '小记',
      icon: 'chonglang',
      children: 'structure',
      link: '/mood/notes/',
    },
  ],




});
