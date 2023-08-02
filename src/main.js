import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(store); // store 사용
app.use(router); // router 사용
app.mount("#app");
