class AllGallery {
    get All_galleries() {
        return cy.get("a[class='nav-link nav-buttons router-link-active']")
    }
    get Search() {
        return cy.get("input[placeholder='Search...']")
    }
    get Filter() {
        return cy.get("button[class='btn btn-outline-secondary input-button']")
    }
    allGallery(){
        this.Search.type(Search)
        this.Filter.click(Filter)
    }
}
export const allGallery = new AllGallery()