/* Segunda forma de prueba */

describe('Main Test', () => {
    it('Deberia loguear correctamente, agregar empleado y verificar titulo', async () => {
        await browser.url('https://www.testfaceclub.com/login-employee-v2/')

        /* Inicio de sesión */
        await $('#user').setValue('admin')
        await $('#pass').setValue('admin123')
        await $('#loginButton').click()

        /* Verificación de titulo */
        await expect($('//*[@id="contentEmployee"]/h4/span')).toExist()
        await expect($('//*[@id="contentEmployee"]/h4/span')).toHaveText('admin')

        /* Agregar empleado */
        await $('//*[@id="name"]').setValue('Natali')
        await $('//*[@id="address"]').setValue('Flores')
        await $('//*[@id="gridEmployee"]/tbody/tr/td/form/fieldset/div[3]/div/div/input').setValue('CABA')
        await $('#state').setValue('Argentina')
        await $('#postcode').setValue('1234')
        await $('#email').setValue('natali@gmail.com')
        await $('#phoneNumber').setValue('112343234')
        await $('#addButton').click()
    });
});

