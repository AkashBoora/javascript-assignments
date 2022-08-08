function displayStorage(){
    if(localStorage.getItem("local")==null){
        localStorage.setItem("local",Number(0));
    }

    if(sessionStorage.getItem("session")==null){
        sessionStorage.setItem("session",0);
    }

    document.getElementById("localScore").innerHTML = localStorage.getItem("local");
    document.getElementById("sessionScore").innerHTML = sessionStorage.getItem("session");
}


function updateLocalCount (){
    localStorage.setItem("local",Number(localStorage.getItem("local"))+1);
    displayStorage();
}

function updateSessionCount (){
    sessionStorage.setItem("session",Number(sessionStorage.getItem("session"))+1);
    displayStorage();
}

function resetLocalCount(){
    localStorage.setItem("local",Number(0));
    displayStorage();
}

function resetSessionCount(){
    sessionStorage.setItem("session",0);
    displayStorage();
}



displayStorage();

let localUpdateButton = document.getElementById("localUpdateButton");
localUpdateButton.addEventListener('click',updateLocalCount);

let sessionUpdateButton = document.getElementById("sessionUpdateButton");
sessionUpdateButton.addEventListener('click',updateSessionCount);

let localResetButton = document.getElementById("localResetButton");
localResetButton.addEventListener('click',resetLocalCount);

let sessionResetButton = document.getElementById("sessionResetButton");
sessionResetButton.addEventListener('click',resetSessionCount);