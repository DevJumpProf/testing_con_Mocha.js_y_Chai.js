import basePage from "../basePage"
import { ChainablePromiseElement } from 'webdriverio';
       

/* Aún no anda este método, lo seguiré verificando */

/* Intentando a que vea el user, agregar y cerrar sesion */
export default class employeePageBase extends basePage{

    public get usernameLabel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('span=admin');
    }
        
    public get addButton():ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('input=addbutton')
    } 

    /* Agregar haciendo click */
   public async clickAdd(): Promise<void> {
        await this.addButton.click()
    }

    public get logoutButton():ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//*[@id="contentEmployee"]/h4/span')
    }
      /* click para cerrar sesión */
    public async clickLogout(): Promise<void> {
        await this.logoutButton.click()
    }
};