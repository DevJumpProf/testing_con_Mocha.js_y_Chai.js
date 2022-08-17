const LoginPage = require ('../pageobjects/login.page');

describe ('logueo - test',()=>{
    it('debe validar las credenciales de logueo', async ()=>{
        await browser.url('https://www.demoblaze.com/index.html')

        await LoginPage.pagPrincipal();

        await LoginPage.login('Galo','1234567890');

        expect(LoginPage.titulo).toHaveText('Sign up');
    })
})