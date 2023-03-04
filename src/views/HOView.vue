<template>
  <div class="HO">
    <!-- <img alt="Vue logo" src="../assets/globe-life-logo.png" /> -->
    <img alt="Vue logo" src="../assets/fcfponline_logo.png" />
    <HOAuth msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src

import HOAuth from "@/components/HOAuth.vue";

export default {
  name: "HomeView",
  components: {
    HOAuth,
  },
};
</script>
