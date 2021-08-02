/// <reference types="Cypress" />

const Locators = require('../../fixtures/Locators.json');
const faker =require('faker');


let userData = {
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password(),
    randomFirstName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),

}


describe('Poboljsani testovi', () => {
    

    let correctEmail = 'test123123@test.com'
    let correctPassword = 'test123123'

    beforeEach(() => {
        cy.visit('/')
        cy.url().should("contains", "https://gallery-app")
    })

    it('Login with valid credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type(correctPassword)
    })
    
    it('Logout', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type(correctPassword)
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Login.Logout).click()
    })

    it('Register', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type('test123')
        cy.get(Locators.Register.LastName).type('testteest123')
        cy.get(Locators.Register.Email).type('test321@test.com')
        cy.get(Locators.Register.Password).type('pasword123')
        cy.get(Locators.Register.ConfirmedPassword).type('pasword123')
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Checkbox).click()
    })
    it('Login with valid credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(userData.randomEmail)
        cy.get(Locators.Login.Password).type(userData.randomPassword)
        cy.get(Locators.Login.Submit).click()
    })
    it.only('Register with random data', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.randomFirstName)
        cy.get(Locators.Register.LastName).type(userData.randomLastName)
        cy.get(Locators.Register.Email).type(userData.randomEmail)
        cy.get(Locators.Register.Password).type(userData.randomPassword+1)
        cy.get(Locators.Register.ConfirmedPassword).type(userData.randomPassword+1)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
    })    
})