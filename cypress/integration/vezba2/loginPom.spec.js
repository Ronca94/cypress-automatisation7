import { authLogin } from '../../page_objects/loginObject';
import { header } from '../../page_objects/headerObject'
describe ('POM login', () => {
    it('login using POM', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()
        authLogin.login('test123123@test.com', 'test123123')
        header.logout()
    })
    
})