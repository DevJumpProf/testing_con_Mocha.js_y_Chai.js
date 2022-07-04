
class LoginPage{
 
    get userNameInput () {
        return $('#user');
    }

    get passWordInput () {
        return $('#pass');
    }

    get loginButton () {
        return $('#loginButton');
    }


   loginAs(userName, passWord) {
        this.userNameInput.setValue(userName);
        this.passWordInput.setValue(passWord);
        this.loginButton.click();
    }


    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
