import {items} from '@/app/data/exampleData'
const { default: ItemsAccordion } = require("@/app/components/Accordion")

const itemsLength = items.length;
const details1 = items[0].details;
const summary1 = items[0].summary;

describe('Accordion.cy.jsx', () => {
    beforeEach(() => {
        cy.mount(<ItemsAccordion items={items} />)
    })
    it('Renders all the data', () => {
        cy.getDataTest('accordion-wrapper').within(() => {
            cy.get('[data-test^="accordion-item"]').should('have.length', itemsLength)
        })
    })
    it('First element opens and closes', () => {
        cy.getDataTest('accordion-wrapper').within(() => {
            cy.contains("Cypress also allows you to test individual components of your app via component tests").should('not.be.visible')

            cy.getDataTest('accordion-item-1').within(() => {
                cy.get('[role=button]').click()
            })

            cy.contains("Cypress also allows you to test individual components of your app via component tests").should('be.visible')

            cy.getDataTest('accordion-item-1').within(() => {
                cy.get('[role=button]').click()
            })

            cy.contains("Cypress also allows you to test individual components of your app via component tests").should('not.be.visible')
        })
        
    })
})