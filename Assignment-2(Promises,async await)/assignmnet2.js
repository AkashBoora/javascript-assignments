// /**
// *
// * Assume we are fetching the data from a rest endpoint in the get data function.
// * we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
// *
// */

// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");
    
//     How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?


function getData(uId,callback){ 
    setTimeout(() => {
        console.log("Fetched the data!");
        callback ("skc@gmail.com");
    }, 4000);
}

function callbackSolution(){
    console.log("start");
    getData("skc",email=>console.log("Email id of the user id is: " + email));
    console.log("end");
}

// callbackSolution();



function getData(uId) {
    return new Promise((resolve,reject) => 
        setTimeout(()=>{
            console.log("Fetched the data!");
            reject("Unable To Fetch Data");
        },4000)
    )
}



function promise(){
    console.log("start");
    getData("skc")
        .then(email=>console.log("Email id of the user id is: " + email))
        .catch(error => console.error(error)).then(()=>console.log("end"));
}

promise();



async function asyncAwait(){ 
    console.log("start");
    await getData("skc")
        .then(email=>console.log("Email id of the user id is: " + email))
        .catch(error => console.error(error))
    console.log("end");
}

// asyncAwait();
