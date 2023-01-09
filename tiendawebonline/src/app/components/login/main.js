function login(){
    var user, password 

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user == "Yongbok" && password == "143"){
        this.iniciosesio();
    }else{
        this.sesionincorrecta();
    }
}