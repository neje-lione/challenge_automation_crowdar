export class LoginPage{
    constructor(){
        this.usernameInput = '[data-test="username"]';
        this.passwordInput = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }

    typeUsername(username){
        cy.get(this.usernameInput).type(username);
    };

    typePassword(password){
        cy.get(this.passwordInput).type(password);
    };

    clickLoginButton(){
        cy.get(this.loginButton).click();
    };

    getErrorMessage(){
        return cy.get(this.errorMessage)
    };
    
    submitLogin(username, password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
    }
}