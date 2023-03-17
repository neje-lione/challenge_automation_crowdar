export class ProductsPage{
    constructor(){
        this.productTitle = '.title';
        this.shoppingCartButon = '.shopping_cart_link';                
    }

    getProductTitle(){
        return cy.get('.title');
    };

    addProduct(product){
        cy.get(`[data-test="add-to-cart-sauce-labs-${product}"]`).click();
    };

    goShoppingCartButton(){
        cy.get(this.shoppingCartButon).click();
    };

    removeProduct(product){
        cy.get(`[data-test="remove-sauce-labs-${product}"]`).click();
    };

    getPathname(){
        return cy.location('pathname');
    };

    getProductsCant(){
        return cy.get('.btn_secondary')
    }
}