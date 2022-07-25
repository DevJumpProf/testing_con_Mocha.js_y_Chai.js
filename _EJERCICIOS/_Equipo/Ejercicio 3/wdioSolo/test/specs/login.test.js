const LoginPage = require('../pageobjects/login.page');


describe('Mi logueo en sauceDemo - Test', () => {
    it('Debería loguearse correctamente', () => {
        browser.url('https://www.saucedemo.com/');
         LoginPage.loginAs('standard_user', 'secreuce');

         
  /*      expect(LoginPage).toExist('PRODUCTS');
        expect(LoginPage).toHaveTextContaining('PRODUCTS'); */  
    });

    it('Deberia estar el titulo', () => {
        browser.url('https://www.saucedemo.com/');
        expect(browser).toHaveTitle('PRODUCTS')

        expect (LoginPage).toExist('PRODUCTS');
        expect(LoginPage).toHaveTextContaining('PRODUCTS');
    }); 
});


