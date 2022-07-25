
class LoginPage{
 
    get userNameInput () {
        return $('#user-name');
    }

    get passWordInput () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }
    
    get tittleProducts () {
        return $('//*[@id="header_container"]/div[2]/span')
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
