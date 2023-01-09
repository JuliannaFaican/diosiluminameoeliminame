function login(){
    var user, password 

    user = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(user == "yongbok" && password == "143"){
        alert("iniciaste sesión")
    }
    else
    {
       alert("Usuario no encontrado")
    }

}