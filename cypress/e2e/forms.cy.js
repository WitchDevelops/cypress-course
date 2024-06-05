describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
  });
  it("When typing correct email", () => {
    cy.get("@subscribe-input").type("test@gmail.com");
    cy.contains(/successfully/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/successfully/i).should("exist");
    cy.wait(3000);
    cy.contains(/successfully/i).should("not.exist");
  });
  it("When typing incorrect email", () => {
    cy.get("@subscribe-input").type("test@randommail.co");
    cy.contains(/invalid/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/invalid/i).should("exist");
    cy.wait(3000);
    cy.contains(/invalid/i).should("not.exist");
  });
  it("When not typing anything, but clicking", () => {
    cy.get("@subscribe-input");
    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
