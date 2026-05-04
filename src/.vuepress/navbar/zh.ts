import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: '文章',
    link: "/zh/posts/",
  },
/*  
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: []
  },
*/
  "/zh/book/",
]);
