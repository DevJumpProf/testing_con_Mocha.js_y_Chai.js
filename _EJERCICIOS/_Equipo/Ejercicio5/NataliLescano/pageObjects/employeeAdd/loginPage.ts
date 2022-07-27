import { ChainablePromiseElement } from 'webdriverio';

import loginPageBase from '../loginPage/loginPageBase';


class LoginPage extends loginPageBase{
   
    /* Inicio de sesión */
    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#user');
    }

    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#pass');
    }

    public get btnLogin(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#loginButton');
    }
   
     public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }


     public async open(): Promise<string> {
        return super.open('login');
    }

    /* va por el comando super de login page. */
}



export default new LoginPage();
