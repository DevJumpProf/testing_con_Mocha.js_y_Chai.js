/* Este es otro metodo con page objet Model, intentando hacer que inicie sesion y cierre secion */

import basePage from "../basePage"
import { ChainablePromiseElement } from 'webdriverio';
       /* heredando el elemento, es necesario para el pageobjets */

export default class loginBasePage extends basePage{
                                            /* la respuesta del user */
    public get usernameLabel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('span=admin');
    }
            /*  */
    public get logoutButton():ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//*[@id="contentEmployee"]/h4/span')
    }
      /* método, debe ser asincrono y se espera una respuesta */
    public async clickLogout(): Promise<void> {
        await this.logoutButton.scrollIntoView()
        await this.logoutButton.click()
    }
};