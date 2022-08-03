<template>
  <div>
    <h2>home</h2>
    <button @click="toAboutView">to about</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const toAboutView = () => {
  router.push({
    name: "about",
  });
};
</script>

<style scoped></style>
