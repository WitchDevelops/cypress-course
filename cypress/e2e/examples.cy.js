describe("Various examples", () => {
    beforeEach(() => {
        cy.visit("/examples")
    })
  it("Navigates the app by clicking on the menu buttons", () => {
    cy.visit("/");
    cy.getDataTest("nav/").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav/overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav/fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav/fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav/forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("nav/examples").click();
    cy.location("pathname").should("equal", "/examples");

    cy.getDataTest("nav/component").click();
    cy.location("pathname").should("equal", "/component");

    cy.getDataTest("nav/best-practices").click();
    cy.location("pathname").should("equal", "/best-practices");
  });
  it("intercepts a POST request", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json"
    });
    cy.getDataTest('POST-btn').click();
  });
  it("Adds and removes items from the list of grudges", () => {
    cy.contains(/add some grudges/i)

    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 0)
    })

    cy.getDataTest('clear-grudge-list-btn').should('not.exist')

    cy.getDataTest('grudge-input').within(() => {
        cy.get('input').type('Some new grudge');
        
    })
    cy.getDataTest('add-grudge-btn').click()

    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 1)
    })

    cy.getDataTest('grudge-input').within(() => {
        cy.get('input').type('Some other grudge');
    })
    cy.getDataTest('add-grudge-btn').click()

    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 2)
        cy.get('li').its(1).should('contains.text', 'Some other grudge')
    })

    //remove item from the list
    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').its(0).within(() => {
            cy.get('button').click()
        })
    })

    //check if the item was removed and there is only 1 item left in the list
    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 1)
    })

    //click the CLEAR button to clear the list
    cy.getDataTest('clear-grudge-list-btn').click()
    cy.getDataTest('grudge-list').within(() => {
        cy.get('li').should('have.length', 0)
    })
    cy.getDataTest('clear-grudge-list-btn').should('not.exist')

  })
});
