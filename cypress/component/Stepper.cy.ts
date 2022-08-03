import Stepper from "../../src/components/Stepper.vue";

describe("Home.cy.ts", () => {
  const counterSelector = "[data-cy=counter]";
  const incrementSelector = "[aria-label=increment]";
  const decrementSelector = "[aria-label=decrement]";

  it("stepper should default to 0", () => {
    // Arrange
    cy.mount(Stepper);
    // Assert
    cy.get(counterSelector).should("have.text", "0");
  });

  it('supports an "initial" prop to set the value', () => {
    // Arrange
    cy.mount(Stepper, { props: { initial: 100 } });
    // Assert
    cy.get(counterSelector).should("have.text", "100");
  });

  it('when the increment button is pressed, the counter is incremented', () => {
    // Arrange
    cy.mount(Stepper)
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get(counterSelector).should('have.text', '1')
  })

  it('when the decrement button is pressed, the counter is decremented', () => {
    // Arrange
    cy.mount(Stepper)
    // Act
    cy.get(decrementSelector).click()
    // Assert
    cy.get(counterSelector).should('have.text', '-1')
  })


  it('when clicking increment and decrement buttons, the counter is changed as expected', () => {
    cy.mount(Stepper, { props: { initial: 100 } })
    cy.get(counterSelector).should('have.text', '100')
    cy.get(incrementSelector).click()
    cy.get(counterSelector).should('have.text', '101')
    cy.get(decrementSelector).click().click()
    cy.get(counterSelector).should('have.text', '99')
  })
});
