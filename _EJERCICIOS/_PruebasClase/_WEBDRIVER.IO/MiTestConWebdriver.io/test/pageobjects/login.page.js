


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage  {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#login_field');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     loginAs(userName, passWord) {
        this.inputUsername.setValue(userName);
        this.inputPassword.setValue(passWord);
        this.btnSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
