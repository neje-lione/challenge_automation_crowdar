export class CartPage{
    constructor(){
        this.productTitle = '.title';
    }

    getPathname(){
        return cy.location('pathname');
    };

    getProductTitle(){
        return cy.get('.title');
    };

    removeProduct(product){
        cy.get(`[data-test="remove-sauce-labs-${product}"]`).click();
    };

    getProductsCant(){
        return cy.get('.btn_secondary.cart_button')
    }
}