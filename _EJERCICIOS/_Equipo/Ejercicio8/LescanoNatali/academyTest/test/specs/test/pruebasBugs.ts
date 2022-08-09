describe ('Pruebas de bugs - Main Suite', () => {
    
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
    
        await $('//*[@id="login-from-side-menu"]/div[4]/p/a').click()
        await $('//*[@id="ec_account_login_email"]').setValue('natalilescano@gmail.com')
        await $('//*[@id="ec_account_login_password"]').setValue('Lescano123')
        
        await $('//*[@id="display-account-login-form-start"]/div[5]/input').click()

    }) 

    it('1-La información del perfil no se actualiza', async () =>{

        await $('//*[@id="ec_loginwidget-5"]/h4').scrollIntoView()
    
        await $('//*[@id="ec_loginwidget-5"]/a[3]').click()

        await $('.ec_account_dashboard_link').click()

        await expect($('//*[@id="ec_account_billing_information"]/div[1]/form/div[1]')).toHaveTextContaining('BILLING INFORMATION')

        await $('//*[@id="ec_account_billing_information_country"]').click()
        await $('//*[@id="ec_account_billing_information_country"]/option[14]').click()

        await $('//*[@id="ec_account_billing_information_first_name"]').setValue('Natali')
        await $('//*[@id="ec_account_billing_information_last_name"]').setValue('Lescano')
        await $('//*[@id="ec_account_billing_information_company_name"]').setValue('Arbusta')
        await $('//*[@id="ec_account_billing_information_address"]').setValue('nataliles43@gmail.com')
        await $('//*[@id="ec_account_billing_information_city"]').setValue('Flores')
        await $('//*[@id="ec_account_billing_information_state"]').setValue('CABA')
        await $('//*[@id="ec_account_billing_information_zip"]').setValue('1416')
        await $('//*[@id="ec_account_billing_information_phone"]').setValue('3884737745')

        await $('.ec_account_button').click()
        
     
        await $('//*[@id="ec_account_billing_information"]/div[1]/form/div[12]/span').click()
        await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
    }) 

    it ('2-El historial de pedidos se cargan indefinidamente', async () =>{
    
        await $('//*[@id="ec_loginwidget-5"]/h4').scrollIntoView()

        await (await $('//*[@id="ec_loginwidget-5"]/a[2]')).click()
        
        await $('//*[@id="ec_account_orders"]/div[2]/div[2]/span').click()
    
        await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
        await $('//*[@id="popmake-4406"]/button').click()
    }) 

     it ('3-Crash Bug,no se puede cambiar de vista', async () =>{
      
        await $('//*[@id="ec_product_page"]/div[1]/span[1]/a[1]').click()

        await expect($('//*[@id="popmake-4406"]')).toBeExisting()        
    
    }) 
     
    it ('4-Agregar más de 2 items', async () =>{

        await $('#ec_add_to_cart_5').click()

        await $('//*[@id="ec_product_page"]/div[2]/a').click()

        await  $('#ec_quantity_759435').setValue('4') 

        await $('#ec_cartitem_update_759435').click()

    }) 

    it('5-Está mal escrito Return the Store', async () =>{

        await $('#ec_add_to_cart_27').click()  
        await $('//*[@id="ec_cartwidget-2"]/div/a/div').scrollIntoView()

        await $('//*[@id="ec_cartwidget-2"]/div/a/div').click()
        await $('//*[@id="ec_cartwidget-2"]/div/div[1]/div/a/div').click()
        

        await $('.ec_cartitem_delete').click()

        await expect($('//*[@id="post-1374"]/div/div/div[1]')).toHaveText('There are no items in your cart.')
        await $('//*[@id="post-1374"]/div/div/div[2]/a').click()

          /* Pantalla del bug */
        await expect($('//*[@id="sq-page"]/div[3]')).toBeExisting()
        await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
        
    
    })

   it('6-Tipo de cambio no funciona', async () =>{

    await $('#ec_currency_conversion').click()
    await $('//*[@id="ec_currency_conversion"]/option[2]').click()
    
    /* Pantalla del bug */
    await expect($('//*[@id="sq-page"]/div[3]')).toExist()
    await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()

    }) 

    it ('7-No abre link de compartir en Twitter', async () =>{

        await $('//*[@id="ec_product_image_effect_dark-grey-jeans"]/a').click()

        await $('//*[@id="post-1673"]/div/section/div[1]/div[3]/div[2]/div[2]/a/img').click()
    
        /* Pantalla del bug */
        await expect($('//*[@id="sq-page"]/div[3]')).toBeExisting()
        await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
    }) 

    it('8-No se puede publicar un comentario', async () =>{
        
        await $('//*[@id="ec_product_image_effect_bright-red-bag"]/a').click()

        await $('#reply-title').scrollIntoView()

        await $('#comment').setValue('Hola')
        await $('#author').setValue('Natali')
        await $('#email').setValue('natalilescano@gmail.com')

        await $('#academy-comment-submit').click()

         /* Pantalla del bug */
         await expect($('//*[@id="sq-page"]/div[3]')).toBeExisting()
         await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
    }) 

    it ('9-Enlace roto del fabricante', async () =>{

        await $('//*[@id="ec_product_image_effect_blue-tshirt"]/a').click()

        await $('//*[@id="manufacturer-bug"]/a').click()

        await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
    })

    it ('10-Descripción del producto no está en inglés', async () =>{

        await $('//*[@id="ec_product_image_effect_bright-red-bag"]/a').click()

        await expect($('//*[@id="post-5540"]/div/section/div[2]/div/div/p')).toHaveTextContaining('Nam nec tellus a odio tincidunt auctor a ornare odio')
        await $('//*[@id="post-5540"]/div/section/div[2]/div/div').click()

        await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
    }) 

    it ('11-Elegir un color de ropa', async () =>{

        await $('//*[@id="ec_product_image_3061856"]/div[3]/h3/a').scrollIntoView()

        await $('//*[@id="ec_product_image_3061856"]/div[3]/div[2]/span/a').click()

        /* elegir el color */
        await $('//*[@id="post-6192"]/div/section/div[1]/div[3]/form/div[5]/div[2]/ul/li[3]/img').click()

        /* Agregar 4 prendas */

        await $('//*[@id="ec_quantity_31"]').setValue('3')
        await $('//*[@id="post-6192"]/div/section/div[1]/div[3]/form/div[9]/div[1]/input[3]').click()
        /* await $('//*[@id="post-6192"]/div/section/div[1]/div[3]/form/div[9]/div[2]/input').click() */

        /* y apareceria el bug */
        /* apareceria el cartel y  */

        await expect($('#popmake-4406')).toExist()
    })

    it ('12-Link de MySpace nunca se carga', async () =>{

        await  $('//*[@id="ec_product_image_effect_dnk-yellow-shoes"]/a').click()

        await  $('//*[@id="post-1675"]/div/section/div[1]/div[3]/div[2]/div[7]/a/img').click()

        await expect($('//*[@id="post-1829"]/div/p[1]/span')).toExist()

          await  $('//*[@id="post-1829"]/div/p[1]/span').click()

          await expect($('#popmake-4406')).toBeDisplayedInViewport()
    }) 


})