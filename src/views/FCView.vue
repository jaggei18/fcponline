<template>
  <div class="FC">
    <!-- <img alt="Vue logo" src="../assets/globe-life-logo.png" /> -->
    <img alt="Vue logo" src="../assets/fcfponline_logo.png" />
    <FCAuth />
  </div>
</template>

<script>
// @ is an alias to /src

import FCAuth from "@/components/FCAuth.vue";

export default {
  name: "FCView",
  components: {
    FCAuth,
  },
};
</script>
