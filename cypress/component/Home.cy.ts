import Home from '@/views/Home.vue'
import { createMemoryHistory, createRouter } from "vue-router";

import { setActivePinia, createPinia } from "pinia";
import { routes } from "../../src/router";

// 重点描述了应该如何测试用了 pinia 和 vue-router 的组件
describe("Home.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should get mount component ", async () => {
    // 使用 then 来获取  比较的繁琐 可读性还非常的差 
    // cy.mount(Home).then(async () => { 
    //   console.log(Cypress.vue);
    //  })

    // 使用 promisify 来解决
    const wrapper = await cy.mount(Home).promisify()
    console.log("warpper---------",wrapper);

  });

  it("to about", () => {
    const router = createRouter({
      routes: routes,
      history: createMemoryHistory(),
    });

    cy.mount(Home, { router });
    cy.contains("to about")
      .click()
      .then(() => {
        const router = Cypress.vue.$router;
        const route = Cypress.vue.$route;
        expect(route.name).to.eql("about");
        console.log((Cypress.vueWrapper.vm as any).show());
        // console.log((Cypress.vue.$.exposeProxy as any).show())
      });
  });
});
