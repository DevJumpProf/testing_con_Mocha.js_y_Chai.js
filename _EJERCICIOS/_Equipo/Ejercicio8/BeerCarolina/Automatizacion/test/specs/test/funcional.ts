describe('funcional test', () => { 
    
    it('debe ingresar a la pagina', async () => {
        await browser.url('https://academybugs.com/store/flamingo-tshirt/')
        const twitter= 'https://twitter.cointent/tweet?original_referer=#'


        await $('//*[@id="post-5547"]/div/section/div[1]/div[3]/div[2]/div[2]').click() 
        await expect($('//*[@id="post-5547"]/div/section/div[1]/div[3]/div[2]/div[2]')).toHaveHrefContaining('Twitter.com')//el link contenga...
        await expect (twitter).toHaveTitleContaining('Twitter')//el titulo de la pag sea...
      

    })
});