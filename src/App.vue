<script setup lang="ts"></script>
<template>
  <div>
    <h1>欢迎来到 one-step</h1>
    <p>
      一步到位 直接开写你的应用 项目配置全部帮你搞定
    </p>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
