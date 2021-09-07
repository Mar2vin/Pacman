let pacman = {
    x : 5,
    y : 2,
    direction : 0
}
let fantome = {
    x : 5,
    y : 3,
    direction : 0
}
let fantome1 = {
    x : 5,
    y : 4,
    direction : 0
}
let grille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2],  //MILIEU
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

setInterval (tourdeJeu, 500);
let plateau = document.querySelector('.plateau');
for (let i in grille){
    for (let j in grille [i]){
        let monElement = document.createElement('div');
        console.log (grille[i][j]);
        
        if (grille[i][j] == 0){
            monElement.className = "mur";
        }
        if (grille[i][j] == 1){
            monElement.className = "sol";
        }
        if (grille[i][j] == 2){
            monElement.className = "bonbon";
        }
        monElement.style.gridArea = (+i +1) + "/" + (+j +1);
        plateau.appendChild(monElement);
    
    }
}

function tourdeJeu(){
    affichePacman();
    afficheFantome();
    afficheGrille();

}

function affichePacman() {
    let monElement = document.createElement('div');
    monElement.className = "pacman";
    monElement.style.gridArea = pacman.y + "/" + pacman.x;
    plateau.appendChild(monElement);
}
function afficheFantome() {
    let monElement = document.createElement('div');
    monElement.className = "fantome";
    monElement.style.gridArea = fantome.y + "/" + fantome.x;
    plateau.appendChild(monElement);
}
function afficheFantome1() {
    let monElement = document.createElement('div');
    monElement.className = "fantome1";
    monElement.style.gridArea = fantome1.y + "/" + fantome1.x;
    plateau.appendChild(monElement);
}

 /*setInterval(function() {
   var dt=new Date();
   var heure=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
   document.getElementById("monHorloge").innerHTML = heure
 }, 250);*/

