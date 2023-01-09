function login(){
    var user, password 

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user == "Yongbok" && password == "143"){
        alert("iniciosesion")
    }else{
        alert("nahah")
    }
}