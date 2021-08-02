class CreateGallery {
    get getTitle() {
        return cy.get ('#title')
    }
    get description () {
        return cy.get ('#description')
    }
    get imageUrl() {
        return cy.get("input[placeholder='image url']")
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