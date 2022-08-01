/* import { isRegularExpressionLiteral } from "typescript"; */
import loginPage from "../../../pageObjects/loginPage/loginPage";


/* Aún no anda este método, lo seguiré verificando */

describe('Login Page Suite', () => {
    beforeEach(async () => {
        loginPage.open()
    })

    it('Debería loguearse', async () => {
        loginPage.login('admin', 'admin123')
        await expect(loginPage.usernameLabel).toHaveTextContaining('admin')
        loginPage.open()
        loginPage.clickLogout()
        await expect(loginPage.usernameLabel).not.toBeExisting()
    })

    it('deberia no loguearse', async () => {
        loginPage.login('admin','admin12345')
        await expect(loginPage.usernameLabel).not.toBeExisting()
    })
})