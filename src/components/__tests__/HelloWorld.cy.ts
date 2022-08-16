import HelloWorld from "../HelloWorld.vue";
describe("component test: Hello World", () => {
  it("mount", () => {
    cy.mount(HelloWorld);

    cy.contains("Hello World");
  });
});
