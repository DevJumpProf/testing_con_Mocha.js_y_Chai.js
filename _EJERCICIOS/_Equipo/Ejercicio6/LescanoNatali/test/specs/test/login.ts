describe('Pruebas de Store - Main Suite', () => {

    beforeEach(async () => {
      await browser.url('https://www.demoblaze.com/index.html')
    })

    it('Debería de registrarse correctamente', async () => {

      await $('#signin2').click()
      await $('#sign-username').setValue('natalilesc')
      await $('#sign-password').setValue('natalilesc43')
      await $('//*[@id="signInModal"]/div/div/div[3]/button[2]').click()

  })

    it('Debería loguearse correctamente', async () => {
      
        await $('//*[@id="login2"]').click()
        await $('//*[@id="loginusername"]').setValue('natalilesc')
        await $('//*[@id="loginpassword"]').setValue('natalilesc43')
        await $('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

        await expect($('#nameofuser')).toHaveTextContaining('Welcome')
        /* Esperar que tenga un atributo el elemento */
        /* await expect($('#nameofuser')).toHaveAttribute('class') */
    })

    it('Debería agregar un producto en el carrito y comprar', async () => {
        
        await $('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()
        await expect ($('//*[@id="tbodyid"]/h2')).toHaveTextContaining('Samsung galaxy s6')
        await (await $('//*[@id="tbodyid"]/div[2]/div/a')).click()

        /* Verificar que esté el producto y comprarlo */
       /*  await expect($('//*[@id="cartur"]')).toHaveHref('cart.html') */ /* Verificar que esté el atributo y el link */
        await $('//*[@id="cartur"]').click()

        await $('//*[@id="page-wrapper"]/div/div[2]/button').click()

        await $('//*[@id="name"]').setValue('Natali')
        await $('//*[@id="country"]').setValue('Argentina')
        await $('//*[@id="city"]').setValue('CABA')
        await $('//*[@id="card"]').setValue('2345 1234 1236 4444')
        await $('//*[@id="month"]').setValue('Marzo')
        await $('//*[@id="year"]').setValue('2028')
        await $('//*[@id="orderModal"]/div/div/div[3]/button[2]').click()

    })

  })