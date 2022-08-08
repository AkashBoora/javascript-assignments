// ---------------------------------------------- To show Menu Items ---------------------------------------------------------

for(let i=0;i<menuItemList.length;i++){
    let menuList = document.getElementsByClassName('menu-items')[0];
    let div = document.createElement("div");
        div.className = "item-body";
        div.id = "item"+menuItemList[i]['id'];
        div.draggable = true;;
    div.setAttribute("ondragstart","handleDragStart( event,"+menuItemList[i]['id']+")");
    let h2 = document.createElement("h2");
    h2.className = "itemName";
    h2.textContent = menuItemList[i]['name'];
    let p1 = document.createElement("p");
    p1.className = "itemPrice";
    p1.textContent = menuItemList[i]['price'];
    let p2 = document.createElement("p");
    p2.className = "itemCat";
    p2.textContent = menuItemList[i]['category'];

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);

    menuList.appendChild(div);

    // menuList.insertAdjacentHTML("beforeend",`
    //         <div class="item-body" id="item${menuItemList[i]['id']}" draggable=true 
    //         ondragstart="handleDragStart(event,${menuItemList[i]['id']})"">
    //             <h2 class="itemName">${menuItemList[i]['name']}</h2>
    //             <p class="itemPrice">${menuItemList[i]['price']}</p>
    //             <p class = "itemCat"><h6>${menuItemList[i]['category']}</h5></p>
    //         </div>`);
}


//------------------------------------------- to search menu items -------------------------------------------------------------------

let menuSearchTxt = document.getElementById('menuSearchTxt');

menuSearchTxt.addEventListener('input',function(){
    let inputSearchString = menuSearchTxt.value.toLowerCase();

    let itemDivs = document.getElementsByClassName('item-body');
    let i = 0;

    Array.from(itemDivs).forEach(function(itemDiv){
        let txtCard = itemDiv.getElementsByTagName('h2')[0].innerText.toLowerCase();
        if(txtCard.includes(inputSearchString)||menuItemList[i]['category'].toLowerCase().indexOf(inputSearchString)>-1){
            itemDiv.style.display="block";
        }
        else{
            itemDiv.style.display="none";
        }
        i++;
    })
})



// ---------------------------------------------- to show tables ------------------------------------------------------------

for(let i=0;i<tables.length;i++){
    let tableList = document.getElementsByClassName('tables')[0];
    
    let div = document.createElement("div");
        div.className = "table-body";
        div.id = "table"+tables[i]['id'];
    div.setAttribute("onclick","orderDetails(event)");
    let h2 = document.createElement("h2");
    h2.className = "tableName";
    h2.textContent = tables[i]['name'];
    let p1 = document.createElement("p");
    p1.id = "table-totalPrice"+tables[i].id;
    p1.textContent = "Total : "+tables[i]['price']+" Rs";
    let p2 = document.createElement("p");
    p2.id = "table-totalItems"+tables[i].id;;
    p2.textContent = "No of items : "+tables[i]['quantity'];

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);

    tableList.appendChild(div);


    // tableList.insertAdjacentHTML("beforeend",
    //         `<div class="table-body" id="table${tables[i].id}"  
    //         onclick="orderDetails(event)">
    //             <h2 class="tableName">${tables[i]['name']}</h2>
    //             <p id="table-totalPrice${tables[i].id}">Total :&nbsp ${tables[i]['price']}&nbsp Rs</p>
    //             <p id="table-totalItems${tables[i].id}">No of items : ${tables[i]['quantity']} </p>
    //         </div>`
    // );
}


//-------------------------------------- search tables --------------------------------------

let tableSearchTxt = document.getElementById('tableSearchTxt');
tableSearchTxt.addEventListener('input',function(){
    let inputSearchString = tableSearchTxt.value.toLowerCase();

    let tableDivs = document.getElementsByClassName('table-body');

    Array.from(tableDivs).forEach(function(e){
        console.log(e);
        let txtCard = e.getElementsByTagName('h2')[0].innerText.toLowerCase();
        if(txtCard.includes(inputSearchString)){
            e.style.display="block";
        }
        else{
            e.style.display="none";
            
        }
    
    })

})