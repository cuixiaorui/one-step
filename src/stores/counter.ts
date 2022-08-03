import { defineStore } from "pinia";
import { ref } from "vue";

// 支持两种写法
// export const useCounterStore = defineStore("counter", {
//   state: () => ({ count: 0 }),
//   getters: {
//     double: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// 我更喜欢这个写法
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
