import loginPage from "../../../pageObjects/employeeAdd/loginPage";

import addPage from "../../../pageObjects/employeeAdd/addPage";

/* Aún no anda este método, lo seguiré verificando */

describe('Main Suite', () => {
    beforeEach(async () => {
        loginPage.open()
    }) 

    it('Debería loguearse', async () => {
        loginPage.login('admin', 'admin123')
         await expect(loginPage.usernameLabel).toHaveTextContaining('admin') 
        loginPage.open()
    })
    
    it('deberia agregar un empleado', async () => {
        addPage.add('Natali','Flores', 'Caba','Argentina','1112','natali@gmail.com','11231223')
        loginPage.clickAdd()
        addPage.open()
    })


    it('Debería desloguearse', async () => {
        await expect(loginPage.usernameLabel).toHaveTextContaining('admin')
        loginPage.clickLogout()
        await expect(loginPage.usernameLabel).not.toBeExisting()
    })
   

});

