describe('Login Test', () => {
    it('Deberia loguear con credenciales validas', async () => {
        await browser.url('https://www.testfaceclub.com/login-employee-v2/')

        await $('#user').setValue('admin')
        await $('#pass').setValue('admin123')
        await $('#loginButton').click()
                        
        await expect($('//*[@id="contentEmployee"]/h4/span')).toExist()
        await expect($('//*[@id="contentEmployee"]/h4/span')).toHaveTextContaining('admin')
    }) ;
});