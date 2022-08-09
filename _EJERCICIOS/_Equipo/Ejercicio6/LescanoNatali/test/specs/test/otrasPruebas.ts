describe('Otras pruebas - Main suite', () => {
 
    beforeEach( async () => {
        await browser.url('https://www.demoblaze.com/index.html')
    })

    it ('Deberia enviar un mensaje en Contáctanos', async () => {

        await $('//*[@id="navbarExample"]/ul/li[2]/a').click() 
        await $('#recipient-email').setValue('nataliles@gmail.com')   
        await $('#recipient-name').setValue('Natali Lescano')   
        await $('#message-text').setValue('Hola este es un mensaje para contáctanos')   

        await $('//*[@id="exampleModal"]/div/div/div[3]/button[2]').click() 
    })

   it ('Pruebas de navegador', async () => {
    
    await browser.url('https://www.demoblaze.com/index.html')

    await expect(browser).toHaveUrl('https://www.demoblaze.com/index.html')

    /* Containing: se puede con una sola palabra para poder identificar el texto */
    await expect(browser).toHaveUrlContaining('demoblaze')

    await expect(browser).toHaveTitle('STORE')

    await expect(browser).toHaveTitleContaining('STORE')

    }) 

    it ('Pruebas con href y link', async () => {
        
        await expect($('#nava')).toHaveAttr('href')

        await expect($('#cartur')).toHaveHref('cart.html')

         await expect($('//*[@id="tbodyid"]/div[3]/div/div/h4/a')).toHaveLink('prod.html?idp_=3')        
    })
   
    it ('Pruebas con ToHave', async () => {

         await expect($('a')).toHaveElementClass('navbar-brand')

         /* await expect($('//*[@id="narvbarx"]')).toHaveElementProperty('height',350) */ 

        await expect($('#itemc')).toHaveId('itemc')

        await expect($('//*[@id="article"]')).toHaveText('The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.')

        await expect($('//*[@id="article"]')).toHaveTextContaining('The Samsung Galaxy S6')
    })

    

    it('Propiedad del elemento', async () => {
        await expect($('//*[@id="nava"]/img')).toHaveElementProperty('height', 50) 
    })


    it('Probar si es clickeable', async () => {
        await expect($('//*[@id="navbarExample"]/ul/li[1]/a')).toBeClickable() 
    })

    it ('Prueba para mostrarse en una ventana gráfica', async () => {

        await expect($('//*[@id="login2"]')).toBeDisplayedInViewport()
    })

    it('Prueba para verificar cuantos hijos tiene un elemento', async () => {

        await expect($('//*[@id="fotcont"]')).toHaveChildren({ lte: 3 })
                                                             /* lte: menos o igual */

        await expect($('//*[@id="fotcont"]')).toHaveChildren(3)

        await expect($('//*[@id="fotcont"]')).toHaveChildren({ gte: 2 })
                                                            /* gte: mayor o igual */
}) 

     it ('Prueba para verificar cuantos elementos  tiene la página', async () => {

        /* $$ colección de elementos */
     await expect($$('div')).toBeElementsArrayOfSize({ lte: 140 }) 
                                                         /* lte: menor  */
    await expect($$('div')).toBeElementsArrayOfSize(129)

    await expect($$('div')).toBeElementsArrayOfSize({ gte: 128 }) 
                                                        /* gte: mayor  */  
}) 
    })
    


