describe('Index test', () => { 
    
    // beforeEach(async ()=>{
    //    await browser.url('https://www.demoblaze.com/index.html')
    // })


    it('login correcto ', async () => {
        
       
        await $('//*[@id="login2"]').click()
        await $('//*[@id="loginusername"]').setValue('caroBeer')
        await $('//*[@id="loginpassword"]').setValue('caro123')
        await $('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()
        await expect($('#nameofuser')).toExist();
        await expect($('#nameofuser')).toHaveTextContaining('Welcome');

    

        // await expect($('#success-alert')).toExist()
        // await expect($('#success-alert')).toHaveText('Success! Employee added successfully.')


    }) ;
});


it.only('debe ..', async () => {
    await browser.url('https://www.demoblaze.com/index.html')
   


   //comprueba que exista el link 
    await expect($('//*[@id="tbodyid"]/div[2]/div/div/h4/a')).toHaveHref('prod.html?idp_=2');

  //comprueba que el div conteiner, en este caso del producto posea los 3 elementos hijos correspondientes
    // await expect($('//*[@id="tbodyid"]/div[2]')).toHaveChildren(3);//indefinido //producto

 //comprueba que el elemento seleccionado sea clickeable 
    //  await expect($( '//*[@id="navbarExample"]/ul/li[1]/a')).toBeClickable();
     //que contenga una direccion determinada

    //  await expect('//*[@id="tbodyid"]/div[1]/div/div/h4/a').toHaveHrefContaining('prod.html?idp_=1');
    //que el elemento contenga la propiedad 
  



}) ;


// it('cumple con la propiedad ..', async () => {
//     await expect('//*[@id="fotcont"]/div[3]/div/div').toHaveElementProperty('h4'); //h4 footer
// })