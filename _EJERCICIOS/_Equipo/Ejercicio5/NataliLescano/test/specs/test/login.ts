/* Segunda forma de prueba, anda perfecto */

describe('Main Test', () => {
    it('Deberia loguear correctamente, agregar empleado y verificar titulo', async () => {
        /* Browser: agregar el link de la página a realizar la prueba */
        await browser.url('https://www.testfaceclub.com/login-employee-v2/')


        /* Crear const para registrar cada id para poder tener las dos opciones de aprobado y fallido */
        const addLink = await $('#addButton')
        const responseSuccess = await $('#success-alert')
        const responseDenied = await $('#danger-alert')

        /* Inicio de sesión */
        await $('#user').setValue('admin')
        await $('#pass').setValue('admin123')
        await $('#loginButton').click()

        /* Verificación de titulo */
        await expect($('//*[@id="contentEmployee"]/h4/span')).toExist()
        await expect($('//*[@id="contentEmployee"]/h4/span')).toHaveText('admin')

        /* Agregar empleado */
        await $('//*[@id="name"]').setValue('Natali')
        await $('//*[@id="address"]').setValue('Lescano')
        await $('//*[@id="gridEmployee"]/tbody/tr/td/form/fieldset/div[3]/div/div/input').setValue('CABA')
        await $('#state').setValue('Argentina')
        await $('#postcode').setValue('1234')
        await $('#email').setValue('natali@gmail.com')
        await $('#phoneNumber').setValue('112343234')
        addLink.click()
    
        /* Cartel de registro exitoso */   
        await expect(responseSuccess).toHaveText('Success! Employee added successfully.')
        
        /* Cartel de registro fallido */   
         /* await expect(responseDenied).toHaveTextContaining('Failed! Please complete all required fields.')  */
    });
});

