/*
*     GLOBAL VARIABLES
*/
var c1 = 0;
var contaner = "";
var contanidor = "";
var operacio = "";
var operador1 = 0.0;
var operador2 = 0.0;
var converNum = 0.0;
var memoria = 0.0;
var totalPreu = 0.0;
/*
*
***** BUY OF GAME ****
*
*/
function buyGame(number){
    document.getElementById("buyG").hidden = false;
    
    butons = '<div id = "botons"><a id="con1" onclick="buy()"><img src="src/img/buy.png" alt=""/></a><a id="con2" onclick="remove()"><img src="src/img/borrar.png" alt=""/></a><a id="sor" onclick="surt()"><img src="src/img/sortir.png" alt=""/></a></div>';

    if (number == 1){
        contaner += "<p>Million is a table game for one flayer, sale : <b>75,5 €</b></p>";
        totalPreu += 75.5;
    } 
    if (number == 2){
        contaner += "<p>City is a game of action on 3D for one player, sale: <b>125,5 € </b></p>";
        totalPreu +=125.5;
    } 
    if (number == 3) {
        contaner += "<p>Circuit Bal, game make rules on the mountain circuit with a ball, sale: <b>155,5 € </b></p>";
        totalPreu +=155.5
    }
    if (number == 4) {
        contaner += "<p>Soldier is a shooter game, for one player, sale: <b> 125,5 € </b></p>";
        totalPreu +=125.5
    }

    document.getElementById("buyG").innerHTML = '<p><em><b>This a ticket for la sale of GAME display.</b></em></p></br>'+contaner+'</b><p><b>SALE PRICE: '+totalPreu+' €</b></p></br>'+butons;
}
function buy() {
    contaner = "";
    totalPreu = 0;
    document.getElementById("buyG").hidden = true;
    document.getElementById("buyG").hidden = false;
    document.getElementById("buyG").innerHTML = '<h1 id="sale">SALE DONE SUCCESSFUL</h1>';
}
function surt() {
    contaner = "";
    totalPreu = 0;
    document.getElementById("buyG").hidden = true;
}
function remove() {
    contaner = "";
    totalPreu = 0;
    buyGame(0);
}
/*
*
********  CALCULATOR   *********
*
*/
function intoNumber(number){
    if ((c1 < 1 && number == ".") || number != ".") contanidor += number;
    if (number ==".") c1++;
    converNum = parseFloat(contanidor);
    document.getElementById("number").innerHTML = converNum;
}
function operArimetica() {
    if (operacio == "") operador1 = converNum;
    else if (operacio == "+") operador1 += converNum;
    else if (operacio == "-") operador1 -= converNum;
    else if (operacio == "*") operador1 *= converNum;
    else if (operacio == "/") operador1 /= converNum;
    else if (operacio == "%") operador1 = (operador1 * converNum) / 100;
    else if (operacio == "p") operador1 = Math.pow(operador2, parseInt(converNum));
    document.getElementById("number").innerHTML = operador1;
    converNum = operador1;
    contanidor = "";
    c1 = 0;
}
function sum () {
    operArimetica(); 
    operacio = "+";
}
function rest() {
    operArimetica();
    operacio = "-";
}
function mult() {
    operArimetica();
    operacio = "*";  
}
function divid() {
    operArimetica();
    operacio = "/";
}
function porcent() {
    operador1 = converNum;
    document.getElementById("number").innerHTML = operador1;
    contanidor = "";
    operacio = "%";
    c1 = 0;
}
function resul() {
    operArimetica();
    operacio = "";
    operador1 = 0;
}
function potencia() {
    operador2 = parseInt(converNum);
    contanidor = "";
    operacio = "p";
    c1 = 0;
}
function sqrt() {
    operador1 = Math.sqrt(converNum);
    document.getElementById("number").innerHTML = operador1;
    contanidor = "";
    operacio = "p";
    operador1 = 0;
    c1 = 0;    
}
function memory(){
    memoria = converNum;
    contanidor = "";
    c1 = 0;
}
function memo(){
    document.getElementById("number").innerHTML = memoria;
    converNum = memoria;
}
