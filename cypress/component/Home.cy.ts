import Home from "../../src/views/Home.vue";
import { createMemoryHistory, createRouter } from "vue-router";

import { setActivePinia, createPinia } from "pinia";
import { routes } from "../../src/router";

// 重点描述了应该如何测试用了 pinia 和 vue-router 的组件
describe("Home.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
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
        const router = Cypress.vue.$router
        const route = Cypress.vue.$route
        console.log(router)
        console.log(route)
        expect(route.name).to.eql('about')
      });
  });
});