/// <reference types="Cypress" />

import { authLogin } from '../../page_objects/loginObject'
import { header } from '../../page_objects/headerObject'
import {createGallery} from '../../page_objects/createGalleryObject'

let galleryId

describe('vezbamo intercept', () => {

        //it('Intecept request', () => {
            //cy.intercept(
               // 'POST',
               // 'https://gallery-api.vivifyideas.com/api/auth/login',
           // ).as('sucessfullLogin')
           // cy.visit('/login')
//              authLogin.login('test123123@test.com', 'test123123')
           // cy.wait('@sucessfullLogin').then((interception) => {
          //      console.log('evo ga interception', interception)
           // })
    //})
    it('Izvlacenje vrednosti prilikom kreiranja galerija', () =>{
        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/galleries'
        ).as('createdGallery')
        cy.visit('/')
        header.loginClick()
        authLogin.login('test123123@test.com', 'test123123')
        header.createGalleryClick()
        createGallery.create('random1', 'random123', 'https://groomingline.rs/wp-content/uploads/2021/03/6-958x1024.jpg')
        cy.wait('@createdGallery').then((interception)=> {
            console.log('created gallery interception', interception)
            galleryId = interception.response.body.id
            cy.log(galleryId)
        })
    })

    it('Posetiti novokreiranu galeriju', () => {
        cy.visit(`galleries/${galleryId}`)
    })
        
})