class CreateGallery {
    get Create_gallery() {
        return cy.get("a[href='/create']")
    }
    get getTitle() {
        return cy.get ('#title')
    }
    get description () {
        return cy.get ('#description')
    }
    get imageUrl() {
        return cy.get("input[placeholder='image url']")
    }
    get Add_image() {
        return cy.get("form > :nth-child(3) > :nth-child(3)")
    }
    get submitGallery () {
        return cy.get('.btn').eq(0)
    }
    create(title,description, imageUrl){
        this.getTitle.type(title)
        this.description.type(description)
        this.imageUrl.type(imageUrl)
        this.submitGallery.eq(0).click()
    }
    
}
export const createGallery = new CreateGallery()