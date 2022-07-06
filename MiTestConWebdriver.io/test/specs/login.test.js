const LoginPage = require('../pageobjects/login.page');


describe('Mi Logueo en gitHub', () => {
    it('Logueo correcto', () => {
        browser.url('');
         LoginPage.loginAs('DevJumpProf', '0303456lala');
    
    });
});
