var control = 1;
var pass;
document.querySelector('#admin').onchange = initGame();
function surt() {
    contanidor = "<img src='' alt=''>";
    document.getElementById("gameNew").innerHTML=contanidor;
    document.getElementById("gameNew").hidden=true;
}
function enrerre(){
    if (control > 1) control -= 1;
    else control = 33;
    playgame(control);
}
function endavant(){
    if (control < 33) control += 1;
    else control = 1;
    playgame(control);
}
function initGame() {
    var adm = document.getElementById("admin").value;
    var encre = adm ^ 986727;
    if (encre == 293784) document.getElementById("gamemobile").hidden = false;
    else document.getElementById("gamemobile").hidden = true;
}
function playgame(game) {
    var ad = document.getElementById("admin").value;
    var encr = ad ^ 986727;
    if (encr == 293784) document.getElementById("gameNew").hidden = false;
    else document.getElementById("gameNew").hidden = true;
    control = game;
    if (screen.width < 1100) {
        window1 = '<div class = "col-md-12"><div id="game">';
    }
    else if (screen.width < 1900) {
        window1 = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">';
    }else {
        window1 = '<div class = "col-md-2"></div><div class = "col-md-8"><div id="game">';
    }
    butons = '<div id = "botons"><a id="con1" onclick="enrerre()"><img src="src/img/enrer.png" alt=""/></a><a id="con2" onclick="endavant()"><img src="src/img/endav.png" alt=""/></a><a id="sor" onclick="surt()"><img src="src/img/sortir.png" alt=""/></a></div>';

    window2 = '<iframe id="capt" src="';
    window3 = '" width=100% height="760" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';
    
   
    if (game == 1) contanidor  = window1 + butons + window2 + 'https://gilbertvs.github.io/Pacman/' + window3;
    
    if (game == 2) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Arkanoid/' + window3;

    if (game == 3) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Dino/' + window3;

    if (game == 4) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/lemming/' + window3;

    if (game == 5) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/mazingerz/' + window3;

    if (game == 6) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/doozy/' + window3;

    if (game == 7) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/tettris/' + window3;
 
    if (game == 8) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/reflection/' + window3;

    if (game == 9) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Labyrinth/' + window3;

    if (game == 10) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/labyrinth2/' + window3;

    if (game == 11) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/obstacle/" + window3;

    if (game == 12) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/question/' + window3;

    if (game == 13) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://gilbertvs.github.io/pinpon/" width=100% height="780" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

    if (game == 14) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://gilbertvs.github.io/Shooter/" width=100% height="780" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

    if (game == 15) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Racecars/' + window3;

    if (game == 16) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Million/' + window3;

    if (game == 17) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/City/' + window3;

    if (game == 18) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Circuit/' + window3;

    if (game == 19) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://simmer.io/@Equalitzator/soldier2" width=100% height="800" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

    if (game == 20) contanidor = window1 + butons + window2 + "https://simmer.io/@Equalitzator/survival" + window3;

    if (game == 21) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/city2/" + window3;

    if (game == 22) contanidor = window1 + butons + window2 + "https://gilbert46.github.io/rallycars/" + window3;

    if (game == 23) contanidor = window1 + butons + window2 + "https://simmer.io/@Equalitzator/tower" + window3;

    if (game == 24) contanidor = window1 + butons + window2 + "https://gilbert46.github.io/castle/" + window3;

    if (game == 25) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/jumperknight/" + window3;

    if (game == 26) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/board/" + window3;

    if (game == 27) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/pacman2/" + window3;

    if (game == 28) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/pacmannight/" + window3;

    if (game == 29) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/domino/" + window3;

    if (game == 30) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/pingpong2/" + window3;

    if (game == 31) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/threeball/" + window3;
    

    if (game == 32) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/asteroit/" + window3;


    if (game == 33) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/dammes/" + window3;

    if (game == 34) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/formulaOne/" + window3;  

    if (game == 35) contanidor = window1 + butons + window2 + "https://gilbertvs.github.io/alfawarrior/" + window3;

    document.getElementById("gameNew").innerHTML = contanidor;

}
