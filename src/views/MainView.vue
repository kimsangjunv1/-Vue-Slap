<template>
  <p>여긴 메인입니다.</p>
  <button v-on:click="SearchMovies()">API 호출</button>
</template>

<script>
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log("메인이 마운트 되었습니다.");
  alert("으악");
});

export default {
  name: "MainView",

  components: {},
  methods: {},
  props: {
    msg: String,
  },
  setup() {
    const search = ref("marvel");
    const movies = ref([]);

    const SearchMovies = async () => {
      console.log("서치 누름 : ", search.value);
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3d606cf9dc17d29e0dec9772c8a629e6&query=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          movies.value = result.results;
          search.value = "";
          console.log("result : ", result);
        })
        .catch((error) => console.log(error));
    };
    return { SearchMovies };
  },
};
</script>

<style></style>
