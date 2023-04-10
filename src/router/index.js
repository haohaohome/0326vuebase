import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Messages from "@/views/Message";
import News from "@/views/News";
import DelMessage from "@/views/MessageDetail";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "message",
          component: Messages,
          children: [
            {
              path: "delmessage/:msgid",
              component: DelMessage,
              name: "delmessage",
              props(router) {
                return {
                  msgid: router.params.msgid,
                  content: router.query.content,
                };
              },
            },
          ],
        },
        {
          path: "news",
          component: News,
        },
        {
          path: "",
          redirect: "message",
        },
      ],
    },
    { path: "/about", component: About },
    //重定向路由
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
