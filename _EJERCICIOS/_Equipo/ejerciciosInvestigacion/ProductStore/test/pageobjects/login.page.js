class LoginPage {

get inicio (){
    return $('#login2') // boton a la ventana de logueo "log in"
}

get nombreUsuario () {
    return $('#loginusername') //input del nombre de usuario
}

get contraUsuario () {
    return $('#loginpassword') //input de contraseña
}

get botonRegistro () {
    return $('//*[@id="logInModal"]/div/div/div[3]/button[2]') // boton "log in" debajo de los input
}

get titulo (){
    return $('#nameofuser')  // string "Welcome Galo"
}

async pagPrincipal (){
    await this.inicio.click();
}

async login (usuario, contra){
    await this.nombreUsuario.setValue(usuario)
    await this.contraUsuario.setValue(contra)
    await this.botonRegistro.click();
}

}

module.exports = new LoginPage();