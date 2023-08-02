import { createRouter, createWebHistory } from "vue-router";

// 각 컴포넌트
// import HelloWorld from "./../components/HelloWorld.vue";
import Main from "../views/MainView.vue";
import AboutView from "./../views/AboutView.vue";
import DetailView from "./../views/DetailView.vue";

// 라우터 설계
const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/detail",
    name: "detail",
    component: DetailView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 라우터 전송
export default router;
