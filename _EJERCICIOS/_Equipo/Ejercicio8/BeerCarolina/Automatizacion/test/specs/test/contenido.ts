describe('contenido test', () => { 
    
    it('debe ingresar a la pagina', async () => {
        await browser.url('https://academybugs.com/store/dnk-yellow-shoes/')


 await expect($('//*[@id="post-1675"]/div/section/div[1]/div[3]/form/div[4]')).toExist()
 await expect($('//*[@id="post-1675"]/div/section/div[1]/div[3]/form/div[4]')).toHaveText('In fact, the author does not hate the land from hatred. But it was not a good life for the football player in the field. The class is suitable for the silent partners who turn to the shores through our marriages, through the Hymenaean projects. Mauris was just in. There is no such thing as a pot of football protein sauce. But neither did the developer.')

    })

});