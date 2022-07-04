const LoginPage = require('../pageobjects/login.page');
const EmployeePage = require('../pageobjects/employee.page');

describe('My Login application', () => {
    it('should login correctly', () => {
        browser.url('');
         LoginPage.loginAs('admin', 'admin123');
    

        expect(EmployeePage.userNameHeader).toHaveText('admin');
    });
});


