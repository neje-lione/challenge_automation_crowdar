import { LoginPage } from "../support/pages/loginPage"
import { ProductsPage } from "../support/pages/productsPage"
import { HeadPage } from "../support/pages/headPage"

const userData = require('../fixtures/userData.json')
const constants = require('../support/constants')

describe('Iniciar Sesión en Swag Labs', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const headPage = new HeadPage();
  
  beforeEach(() => {
    cy.visit('/')  
  });


  it('001 - Inicio de sesión exitoso', () => {      
    cy.screenshot('init page');
    loginPage.submitLogin(userData.STANDARD_USER, userData.SYSTEM_PASSWORD);
    productsPage.getPathname().should('eq', constants.LOCATION_MESSAGE.INVENTORY_PATHNAME);
    headPage.getAppLogo().should('have.text', constants.EXPECTED_MESSAGE.LOGO_MESSAGE);
    productsPage.getProductTitle().should('have.text', constants.EXPECTED_MESSAGE.PRODUCT_TITLE_MESSAGE);    
    cy.screenshot('products page');
  });

  it('007 - Inicio de sesión de usuario bloqueado', () => {
    loginPage.submitLogin(userData.LOCKED_OUT_USER, userData.SYSTEM_PASSWORD);    
    loginPage.getErrorMessage().should('contain.text', constants.ERROR_MESSAGE.LOCKED_OUT_USER);
  });

  it('007 - FAILED - Inicio de sesión de usuario bloqueado', () => {
    loginPage.submitLogin(userData.LOCKED_OUT_USER, userData.SYSTEM_PASSWORD);
    loginPage.getErrorMessage().should('contain.text', constants.ERROR_MESSAGE.FAILED_MESSAGE);
  });


})