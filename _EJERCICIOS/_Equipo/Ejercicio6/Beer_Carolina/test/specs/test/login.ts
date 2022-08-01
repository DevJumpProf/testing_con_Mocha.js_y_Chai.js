describe('Login Test', () => {
    it('Deberia loguear con credenciales validas', async () => {
        await browser.url('https://www.testfaceclub.com/login-employee-v2/')

        await $('#user').setValue('admin')
        await $('#pass').setValue('admin123')
        await $('#loginButton').click()

        await $('#name').setValue('Marcos')
        await $('#address').setValue('bvb knk.')
        await $('//*[@id="gridEmployee"]/tbody/tr/td/form/fieldset/div[3]/div/div/input').setValue('CABA')
        await $('#state').setValue('Argentina')
        await $('#postcode').setValue('1419')
        await $('#email').setValue('marcos@gmail.com')
        await $('#phoneNumber').setValue('153326548') 
        await $('#addButton').click()

        await expect($('//*[@id="contentEmployee"]/h4/span')).toExist()
        await expect($('//*[@id="contentEmployee"]/h4/span')).toHaveText('admin')

        //ej6

        await expect($('#success-alert')).toExist()
         // capturamos el mensaje success para que no acepte campos sin completar 
        await expect($('#success-alert')).toHaveText('Success! Employee added successfully.')


    }) ;
});