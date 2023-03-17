export class HeadPage{
    constructor(){
        this.menuButton = '#react-burger-menu-btn';
        this.appLogo = '.app_logo';        
        this.shoppingCartBadge = '.shopping_cart_badge';
    }

    getAppLogo(){
        return cy.get(this.appLogo);
    };

    getProductCountInCart(){
        return cy.get(this.shoppingCartBadge);
    };
}