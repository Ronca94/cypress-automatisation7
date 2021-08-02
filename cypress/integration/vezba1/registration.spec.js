/// <reference types="Cypress" />

describe("Registraion", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it('Click on registration button', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(2).click()
    })
it('Registraion with valid data', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#first-name').type('mihajlooooo')
        cy.get('.nav-link').eq(2).click()
        cy.get('#last-name').type('roncevicijus')
    })     
})