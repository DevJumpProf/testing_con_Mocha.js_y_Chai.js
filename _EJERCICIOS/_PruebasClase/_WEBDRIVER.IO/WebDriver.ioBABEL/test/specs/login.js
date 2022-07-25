describe('My Login application', () => {
    it('should login correctly', () => {
        browser.url('https://www.saucedemo.com/');

('#user-name').setValue('standard_user')
('#password').setValue('secret_sauce')
('#login-button').click()
    
expect('//*[@id="header_container"]/div[2]/span').toExist()
expect('//*[@id="header_container"]/div[2]/span').toHaveText('PRCTS')
     
    });
});




/* 
describe('Login Test', () => {
    it('Deberia loguear con credenciales validas', async () => {
        await browser.url('https://www.saucedemo.com/')

        await ('#user-name').setValue('standard_user')
        await ('#password').setValue('secret_sauce')
        await ('#login-button').click()
                        
        await expect('//*[@id="header_container"]/div[2]/span').toExist()
        await expect('//*[@id="header_container"]/div[2]/span').toHaveTextContaining('PRODUCTS')
    }) ;
}); */