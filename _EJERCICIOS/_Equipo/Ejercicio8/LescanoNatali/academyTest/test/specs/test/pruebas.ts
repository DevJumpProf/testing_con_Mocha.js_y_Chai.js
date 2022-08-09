describe ('Pruebas de AcademyBugs', () => {

    beforeEach(async () => {
       await browser.url('https://academybugs.com/store/')
    })

    it ('Crear cuenta', async () =>{

        await $('//*[@id="login-from-side-menu"]/div[4]/p/a').scrollIntoView()

        await $('//*[@id="login-from-side-menu"]/div[4]/p/a').click()

        /* Agregar datos */
        await $('#ec_account_register_first_name').setValue('Natali')
        await $('#ec_account_register_last_name').setValue('Lescano')
        await $('#ec_account_register_email').setValue('natalilescano@gmail.com')
        await $('#ec_account_register_retype_email').setValue('natalilescano@gmail.com')
        await $('#ec_account_register_password').setValue('Lescano123')
        await $('#ec_account_register_password_retype').setValue('Lescano123')

        await $('#ec_account_register_is_subscriber').click()

        await $('//*[@id="ec_account_register"]/div[1]/form/div[8]/input[2]').click()   
    })

    it ('Iniciar sesión', async () =>{
        await $('//*[@id="ec_loginwidget-5"]/h4').scrollIntoView()
    
        await $('#ec_account_login_email_widget').setValue('natalilescano@gmail.com')
        await $('#ec_account_login_password_widget').setValue('Lescano123')
        await $('//*[@id="login-from-side-menu"]/div[6]/button').click()
    }) 


})