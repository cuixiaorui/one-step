<template>
  <div>
    <h2>about</h2>
    <router-link :to="{ name: 'home' }">to home</router-link>

    <div>
      <h3>store - counter</h3>
      count: {{ counterStore.count }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>

<style scoped></style>
