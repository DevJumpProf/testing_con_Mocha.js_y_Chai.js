import { ChainablePromiseElement } from 'webdriverio';

/* Aún no anda este método, lo seguiré verificando */

import employeePageBase from './employeePageBase';

class addPage extends employeePageBase{
    /* Agregar empleado */
    public get inputName(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#name');
    }

    public get inputAdress(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#adress');
    }

    public get inputCity(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#city');
    }

    public get inputState(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#state');
    }

    public get inputPostCode(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#postcode');
    }

    public get inputEmail(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#email');
    }

    public get inputPhone(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#phoneNumber');
    }

    public get btnAdd(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#addButton');
    }

    public async add
    (name:string, adress: string, city: string, state:string, postcode: string, email:string, phonenumber:string): Promise<void> {
    await this.inputName.setValue(name);
    await this.inputAdress.setValue(adress);
    await this.inputCity.setValue(city);
    await this.inputState.setValue(state);
    await this.inputPostCode.setValue(postcode);
    await this.inputEmail.setValue(email);
    await this.inputPhone.setValue(phonenumber);
    await this.btnAdd.click();
    }

    public async open(): Promise<string> {
        return super.open('add');
    }
}

export default new addPage();