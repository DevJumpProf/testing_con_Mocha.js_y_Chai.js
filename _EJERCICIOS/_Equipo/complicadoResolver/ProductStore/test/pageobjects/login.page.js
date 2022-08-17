class LoginPage {

get inicio (){
    return $('#signin2') // boton "Sign up"
}

get titulo (){
    return $('#signInModalLabel')  // string "Sign up"
}

get nombreUsuario () {
    return $('#sign-username') //input de username
}

get contraUsuario () {
    return $('#sign-password') //input de contraseña
}

get botonRegistro () {
    return $('//*[@id="signInModal"]/div/div/div[3]/button[2]')
}

async pagPrincipal (){
    await this.inicio.click();
}

async login (usuario, contra){
    await this.nombreUsuario.serValue(usuario)
    await this.contraUsuario.setValue(contra)
    await this.botonRegistro.click();
}

}

module.exports = new LoginPage();