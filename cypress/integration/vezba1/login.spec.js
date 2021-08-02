/// <reference types="Cypress" />



describe("Login", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it('Click on login button', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()
    })
    
})

it('Login with valid data', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(1).click()
    cy.get('#email').type('test123123@test.com')
    cy.get('#password').type('test123123')
    cy.get('button').click()
}) 

it('Logout', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(1).click()
    cy.get('#email').type('test123123@test.com')
    cy.get('#password').type('test123123')
    cy.get('button').click()
    //cy.wait(500) //lose ga je koristiti, moze za debug ili ako bas nema drugog nacina
    
    cy.get('.nav-link').should('have.length', 4) //asertacija, moze se koristiti da sacekamo dok se ne ostvari
    cy.get('.nav-link').eq(3).click()
})




