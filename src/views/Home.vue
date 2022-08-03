<template>
  <div>
    <h2>home</h2>
    <Button @click="toAboutView">to about</Button>
    <div>
      <h3>store - counter</h3>
      count: {{ counterStore.count }}
      <Button type="primary" @click="counterStore.increment">increment</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { Button } from "ant-design-vue";

const router = useRouter();
const toAboutView = () => {
  router.push({
    name: "about",
  });
};

// store
const counterStore = useCounterStore();
console.log(counterStore);
</script>

<style scoped></style>
