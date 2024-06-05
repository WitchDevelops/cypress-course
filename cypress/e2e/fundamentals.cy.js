// describe block: takes two arguments.
// 1) string, describing the test file
// 2) callback function that contains all the tests

describe("fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  // it block: for individual tests (unit tests?) for the describe block
  // same syntax as for the describe block
  // there can be many it() blocks
  it("Contains correct header text", () => {
    // cy object
    // has seceral methods:
    // visit - navigates to particular page
    // click - simulates a click event
    // type - simulates typing
    // check the docs for more: https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability

    //cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i) //make it case-insensitive, that's why it's in a regex. It could also be a string for direct matching
    cy.getDataTest('fundamentals-header').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
  it("Accordion opens and closes", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click().pause();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
