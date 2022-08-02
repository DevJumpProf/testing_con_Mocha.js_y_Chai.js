describe('test logueo', () => {
    it('Deberia loguear con credenciales validas', async () => {
        await browser.url('https://www.testfaceclub.com/login-employee-v2/')

        await $('#user').setValue('admin')
        await $('#pass').setValue('admin123')
        await $('#loginButton').click()
    
        await expect($('//*[@id="contentEmployee"]/h4/span')).toExist()
        await expect($('//*[@id="contentEmployee"]/h4/span')).toHaveText('admin')
    }) ;

    it("rellenar datos",async()=>{
        await $('#name').setValue('Galo')
        await $('#address').setValue('Libertad 839')
        await $('//*[@id="gridEmployee"]/tbody/tr/td/form/fieldset/div[3]/div/div/input').setValue('Moreno')
        await $('#state').setValue('Buenos Aires')
        await $('#postcode').setValue('1744')
        await $('#email').setValue('r8driguezgalo@gmail.com')
        await $('#phoneNumber').setValue('1167104514')
        await $('#addButton').click()

        await expect($('#success-alert')).toExist()
        await expect($('#success-alert')).toHaveText('Success! Employee added successfully.')
    })
});

// Success! Employee added successfully.
