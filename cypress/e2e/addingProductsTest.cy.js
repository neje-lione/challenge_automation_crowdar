import { LoginPage } from "../support/pages/loginPage"
import { ProductsPage } from "../support/pages/productsPage"
import {HeadPage} from "../support/pages/headPage"
import { CartPage } from "../support/pages/cartPage";


const userData = require('../fixtures/userData.json');
const productData = require('../fixtures/productsData.json');
const constants = require('../support/constants')

describe('Agregado de productos al carrito de compras en Swag Labs', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const headPage = new HeadPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.visit('');
        loginPage.submitLogin(userData.STANDARD_USER, userData.SYSTEM_PASSWORD);
        productsPage.addProduct(productData.PRODUCT_1);
        productsPage.addProduct(productData.PRODUCT_2);                
    });

    it('012 - Agregar 2 articulos al carrito de compras', () => {
        productsPage.getProductsCant().should('have.length', productData.INITIAL_AMOUNT);        
        headPage.getProductCountInCart().should('have.text', productData.INITIAL_AMOUNT); 
    });

    it('014 - Remover un articulo del carrito de compras', () => {
        productsPage.goShoppingCartButton();
        cartPage.getProductTitle().should('have.text', constants.EXPECTED_MESSAGE.CART_TITLE_MESSAGE);
        cartPage.getPathname().should('eq', constants.LOCATION_MESSAGE.CART_PATHNAME);
        cartPage.removeProduct(productData.PRODUCT_2);
        cartPage.getProductsCant().should('have.length', productData.FINAL_AMOUNT);        
        headPage.getProductCountInCart().should('have.text', productData.FINAL_AMOUNT);

    });

});