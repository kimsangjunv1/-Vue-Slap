import { createStore } from "vuex";

const store = createStore({
  // 변수들의 집합
  state: {
    name: "투케이",
  },

  // state의 변수들을 get 호출
  getters: {},

  // 변수들을 조작하는 함수들
  mutations: {},

  //비동기 처리를 하는 함수들
  actions: {},
});

export default store;
