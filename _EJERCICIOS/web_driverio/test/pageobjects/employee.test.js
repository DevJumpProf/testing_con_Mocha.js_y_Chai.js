const LoginPage = require('../pageobjects/login.page');
const EmployeePage = require('../pageobjects/employee.page');

describe('Employee', () => {
    it('should add employee', () => {
        browser.url('');
         LoginPage.loginAs('admin', 'admin123');
         expect(EmployeePage.userNameHeader).toHaveText('admin');
    
         EmployeePage.fillEmployeeForm('Marcos','RRZ','RRZ','Argentina','11500','marcos@gmail.com','115368554');
         EmployeePage.addEmployee();

        expect(EmployeePage.successAlert).toBeDisplayed();
    });
});

