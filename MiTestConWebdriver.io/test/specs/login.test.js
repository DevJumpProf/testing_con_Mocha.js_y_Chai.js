const LoginPage = require('../pageobjects/login.page');
const EmployeePage = require ("../pageobjects/employee.page")

describe('Mi Logueo en gitHub', () => {
    it('Logueo correcto', () => {
        browser.url('');
         LoginPage.loginAs('xxxxx', 'xxxxxxx');

        expect(EmployeePage.userNameHeader).toHaveTextContaining('gkgkjhgkj');
    });


   
});
