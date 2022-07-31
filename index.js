let wolf = document.querySelector("#wolf");
let chicken = document.querySelector("#chicken");
let corn = document.querySelector("#corn");
let boat = document.querySelector("#boat")

let marginE = document.querySelector(".marginE");
let river = document.querySelector(".river")
let marginD = document.querySelector(".marginD");
let boatArea = document.querySelector(".boatArea");

let victoryScreen = document.querySelector(".victoryScreen");
let loseScreen = document.querySelector(".loseScreen");
let restartWin = document.querySelector("#restartWin");
let restartLose = document.querySelector("#restartLose");

let rules = document.querySelector(".rules");
let start = document.querySelector("#start");

river.style.justifyContent = "flex-start";

let contador = 0;

wolf.addEventListener("click", () => {
    move(wolf.id , wolf);
});
chicken.addEventListener("click", () => {
    move(chicken.id, chicken);
});
corn.addEventListener("click", () => {
    move(corn.id, corn);
});

function move(id, object) {
    if(river.style.justifyContent == "flex-start") {
        if(marginE.querySelector(`#${id}`) != null && contador == 0) {
            marginE.removeChild(object);
            object.style.position = "absolute"; 
            boatArea.appendChild(object);
            contador ++;
        }
        else if(boatArea.querySelector(`#${id}`) != null && contador == 1) {
            boatArea.removeChild(object);
            object.style.position = "static"; 
            marginE.appendChild(object);
            contador --;
        }
    }
    else{
        if(marginD.querySelector(`#${id}`) != null && contador == 0) {
            marginD.removeChild(object);
            object.style.position = "absolute"; 
            boatArea.appendChild(object);
            contador ++;
        }
        else if(boatArea.querySelector(`#${id}`) != null && contador == 1) {
            boatArea.removeChild(object);
            object.style.position = "static"; 
            marginD.appendChild(object);
            contador --;
        }
    }
    victory();
}

boat.addEventListener("click", () => {
    if(river.style.justifyContent == "flex-start") {
        river.style.justifyContent = "flex-end";
    }
    else {
        river.style.justifyContent = "flex-start";
    }
    lose();
});

function victory() {
    if(marginD.querySelector("#wolf")!=null && marginD.querySelector("#chicken")!=null && marginD.querySelector("#corn")!=null){
        victoryScreen.style.display="initial";
    }
}
function lose() {
    if(river.style.justifyContent == "flex-start") {
        if(marginD.querySelector("#wolf")!= null && marginD.querySelector("#chicken")!=null) {
            loseScreen.style.display="initial"; 
        }
        else if(marginD.querySelector("#chicken")!= null && marginD.querySelector("#corn")!=null) {
            loseScreen.style.display="initial"; 
        }
    }
    else {
        if(marginE.querySelector("#wolf")!=null && marginE.querySelector("#chicken")!=null) {
           loseScreen.style.display="initial"; 
        }
        else if(marginE.querySelector("#chicken")!=null && marginE.querySelector("#corn")!= null) {
            loseScreen.style.display="initial"; 
        }   
    }
}

restartWin.addEventListener("click", () => {
    location.reload(); /* reinicia a pagina com js */
})
restartLose.addEventListener("click", () => {
    location.reload(); /* reinicia a pagina com js */
})
start.addEventListener("click", () => {
    rules.style.display = "none";
})