/// <reference types="Cypress" />

import { authLogin } from '../../page_objects/loginObject';
import { header } from '../../page_objects/headerObject'
describe ('POM login', () => {

    before(()=>{
        //cy.request(
            //'POST',
            //'https://gallery-api.vivifyideas.com/api/auth/login',
            //{
           //     email:"test123123@test.com",
           //     password: "test123123"
           // }
           // ).its('body')
           //     .then((response) => {
           //     //console.log('ovde logujemo', response)
           //         window.localStorage.setItem('token', response.access_token)
//
           // })
           //cy.loginCommand('test123123@test.com', 'test123123')

        cy.loginCommandEnv()
    })

    it('login using POM', () => {
        cy.visit('/')
        //cy.get('.nav-link').eq(1).click()
        //authLogin.login('test123123@test.com', 'test123123')
        //header.logout()
    })

    it.only('Get allGalleries through backend', () => {
        cy.request(
            'GET',
            'https://gallery-api.vivifyideas.com/api/galleries?page=1&term=',
        ).its('body')
            .then((response) => {
                console.log('ovde je Pera')
            })
    })
    
})