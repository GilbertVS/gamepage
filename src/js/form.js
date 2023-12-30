
function validateForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var adress = document.getElementById("adress").value;
    var pc = document.getElementById("pc").value;
    var commen = document.getElementById("commentary").value;
    var validate = true;
    var account = 0;
    document.getElementById("errorname").innerHTML = "";
    document.getElementById("name").style.borderColor = "grey";
    document.getElementById("errorsurn").innerHTML = "";
    document.getElementById("surname").style.borderColor = "grey";
    document.getElementById("erroremail").innerHTML = "";
    document.getElementById("email").style.borderColor = "grey";
    document.getElementById("errorCP").innerHTML = "";
    document.getElementById("pc").style.borderColor = "grey";

    if (name == ""){
        validate = false;
        document.getElementById("errorname").innerHTML = '<p style="color:red"> The name field is empty. </p>';
        document.getElementById("name").style.borderColor = "red";
    }
    if (surname == ""){
        validate = false;
        document.getElementById("errorsurn").innerHTML = '<p style="color:red"> The surname field is empty. </p>';
        document.getElementById("surname").style.borderColor = "red";
    }
    if (email == ""){
        validate = false;
        document.getElementById("erroremail").innerHTML = '<p style="color:red"> The email field is empty. </p>';
        document.getElementById("email").style.borderColor = "red";
    }
    if (pc == ""){
        validate = false;
        document.getElementById("errorCP").innerHTML = '<p style="color:red"> The postal code field is empty.</p>';
        document.getElementById("pc").style.borderColor = "red";
    }
    if (pc > 99999){
        validate = false;
        document.getElementById("errorCP").innerHTML = '<p style ="color:red"> The zip code number is too big. </p>';
        document.getElementById("PC").style.borderColor = "red";
    }
    if (validate == true){
        document.getElementById("validar").hidden = true;
        document.getElementById("send").hidden = false;
        document.getElementById("sendMsg").innerHTML = '<p style="color:green">Congratulation, you are validation.</p>';
    }
}
function sendForm() {
    document.getElementById("sendMsg").innerHTML = "";
    document.getElementById("send").hidden = true;
    document.getElementById("validar").hidden = false;
    document.getElementById("pc").value = "";

    document.getElementById("email").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("name").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("commentary").value = "";
}

