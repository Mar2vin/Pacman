let pacman = {
    x : 5,
    y : 2,
    direction : 0
}
let score = 0;

let fantome = [
   a = {
    x : 10,
    y : 12,
    direction : 1
},
    b = {
    x : 2,
    y : 3,
    direction : 0
},
    c = {
    x : 2,
    y : 4,
    direction : 0
},
    d = {
    x : 2,
    y : 5,
    direction : 0
}];
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
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0],  //MILIEU
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

setInterval (tourdeJeu, 500);
let plateau = document.querySelector('.plateau');
document.body.addEventListener("keyup",directionPacman);

function afficheGrille(){
    plateau.innerHTML="";
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
 
}

function tourdeJeu(){
    afficheGrille();
    movePacman();
    collisionPacman();
    carnivorePacman();
    affichePacman();
    afficheFantome();
    
    afficheScore();
    gagnant();
}

function affichePacman() {
    let monElement = document.createElement('div');
    monElement.className = "pacman";
    monElement.style.gridArea = pacman.y + "/" + pacman.x;
    if (pacman.direction == 0){
        monElement.style.transform = "rotate(0deg)";
    }
    if (pacman.direction == 1){
        monElement.style.transform = "rotate(90deg)";
    }
    if (pacman.direction == 2){
        monElement.style.transform = "rotate(180deg)";
    }
    if (pacman.direction == 3){
        monElement.style.transform = "rotate(270deg)";
    }
    
    plateau.appendChild(monElement);
}
function movePacman(){
    if (pacman.direction == 0){
        pacman.x++;
    }
    if (pacman.direction == 1){
        pacman.y++;
    }
    if (pacman.direction == 2){
        pacman.x--;
    }
    if (pacman.direction == 3){
        pacman.y--;
    }
}
function collisionPacman(){
    if (grille[pacman.y -1][pacman.x -1] == 0){
        if (pacman.direction == 0){
            pacman.x--;
        }
        if (pacman.direction == 1){
            pacman.y--;
        }
        if (pacman.direction == 2){
            pacman.x++;
        }
        if (pacman.direction == 3){
            pacman.y++;
        }
    }
}
function directionPacman(event){
    if (event.key == "ArrowUp"){
        pacman.direction= 3;
    
    }
    if (event.key == "ArrowDown"){
        pacman.direction= 1;
       
    }
    if (event.key == "ArrowRight"){
        pacman.direction= 0;
      
    }
    if (event.key == "ArrowLeft"){
        pacman.direction= 2;
     
    }
}
function carnivorePacman(){
    if (grille[pacman.y -1][pacman.x -1] == 2){
        grille[pacman.y -1][pacman.x -1] = 1;
        score++;
    }
    
}
function afficheScore(){
    let divScore=document.querySelector(".score");
    divScore.innerHTML="SCORE :"+score;
}
function gagnant (){
    if (score == 192){
        window.alert("Vous avez gagné")
    }
}

function afficheFantome() {
    for(let i in fantome ){
let monElement = document.createElement('div');
    if(i == 0 ){
        monElement.className = "fantome";
    }
    if(i == 1 ){
        monElement.className = "fantome1";
    }
    if(i == 2 ){
        monElement.className = "fantome2";
    }
    if(i == 3 ){
        monElement.className = "fantome3";
    }
    monElement.style.gridArea = fantome[i].y + "/" + fantome[i].x;
    plateau.appendChild(monElement);
    }
}

/*function collisionFantome(){
    if (grille[fantome.y -1][fantome.x -1] == 0){
        if (fantome.direction == 0){
            fantome.x--;
        }
        if (fantome.direction == 1){
            fantome.y--;
        }
        if (fantome.direction == 2){
            fantome.x++;
        }
        if (fantome.direction == 3){
            fantome.y++;
        }
    }
}


 setInterval(function() {
   var dt=new Date();
   var heure=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
   document.getElementById("monHorloge").innerHTML = heure
 }, 250);*/

