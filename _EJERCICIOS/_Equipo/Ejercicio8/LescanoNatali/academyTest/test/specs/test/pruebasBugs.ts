describe ('Pruebas de bugs - Main Suite', () => {
    
    beforeEach(async () => {
        await browser.url('https://academybugs.com/store/')
     })

     it ('1-Crash Bug,no se puede cambiar de vista', async () =>{
      
        await $('//*[@id="ec_product_page"]/div[1]/span[1]/a[1]').click()

        await expect($('//*[@id="popmake-4406"]')).toBeExisting()        
    
    }) 
     
    it ('2-Agregar más de 2 items', async () =>{

        await $('#ec_add_to_cart_5').click()

        await $('//*[@id="ec_product_page"]/div[2]/a').click()

        await (await $('#ec_quantity_759435')).setValue('4') 

        await $('#ec_cartitem_update_759435').click()

    }) 

    it ('3-Está mal escrito Return the Store', async () =>{

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

   it('4-Tipo de cambio no anda', async () =>{

    await $('#ec_currency_conversion').click()
    await $('//*[@id="ec_currency_conversion"]/option[2]').click()
    
    /* Pantalla del bug */
    await expect($('//*[@id="sq-page"]/div[3]')).toBeExisting()
    await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()

    }) 

    it ('5-No abre link de compartir en Twitter', async () =>{

        await $('//*[@id="ec_product_image_effect_dark-grey-jeans"]/a').click()

        await $('//*[@id="post-1673"]/div/section/div[1]/div[3]/div[2]/div[2]/a/img').click()
    
        /* Pantalla del bug */
        await expect($('//*[@id="sq-page"]/div[3]')).toBeExisting()
        await expect($('//*[@id="popmake-4406"]')).toBeDisplayedInViewport()
    }) 

    it.only ('6-No se puede publicar un comentario', async () =>{
        
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

    it ('Elegir un color de ropa', async () =>{

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
})