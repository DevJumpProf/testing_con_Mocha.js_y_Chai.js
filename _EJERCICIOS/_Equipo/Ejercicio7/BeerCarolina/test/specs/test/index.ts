describe ('Index test', () => { 
    it('debe ingresar al href correcto', async () => {
        await browser.url('https://www.demoblaze.com/index.html')
       
    
    
        await expect($('//*[@id="tbodyid"]/div[2]/div/div/h4/a')).toHaveHref('prod.html?idp_=2');
        await expect($('//*[@id="tbodyid"]/div[1]/div/div/h4/a')).toHaveHref('prod.html?idp_=1');
    
    })
});

it('debe tener hijos', async () => {
    await browser.url('https://www.demoblaze.com/index.html')
   
    await expect($('//*[@id="tbodyid"]/div[2]')).toHaveChildren({eq:1});//funciona con equal
    await expect($('/html/body/nav')).toHaveChildren({eq:4})

});

it('debe tener propiedad', async () => {
    await browser.url('https://www.demoblaze.com/index.html')
   
    await expect($('//*[@id="page-wrapper"]/div/div[1]/h2')).toHaveElementProperty('weight' , 500)
});