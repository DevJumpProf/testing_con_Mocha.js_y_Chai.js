describe('Formulario', () => {
    it('Debe completar todos los campos', async () => {
        await browser.url('https://www.testfaceclub.com/login-employee-v2/')

        await $('#name').setValue('Marcos')
        await $('#address').setValue('bvb knk.')
        await $('//*[@id="gridEmployee"]/tbody/tr/td/form/fieldset/div[3]/div/div/input').setValue('CABA')
        await $('#state').setValue('Argentina')
        await $('#postcode').setValue('1419')
        await $('#email').setValue('marcos@gmail.com')
        await $('#phoneNumber').setValue('153326548')




        // await expect($('//*[@id="contentEmployee"]/h4/span')).toExist()
        // await expect($('//*[@id="contentEmployee"]/h4/span')).toHaveText('admin')
        

    }) ;
});