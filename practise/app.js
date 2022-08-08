// Menu Items List
let menuItemList = [
    {
        id: 1,
        name: "Chicken Biryani",
        price: 250,
        category: "Main Course"
    },
    {
        id: 2,
        name: "Mutton Biryani",
        price: 350,
        category: "Main Course"
    },
    {
        id: 3,
        name: "Veg Biryani",
        price: 230,
        category: "Main Course"
    },
    {
        id: 4,
        name: "Butter Naan",
        price: 30,
        category: "Rotis & Breads"
    },
    {
        id: 5,
        name: "Rumali Roti",
        price: 25,
        category: "Rotis & Breads"
    },
    {
        id: 6,
        name: "Tanduri Roti",
        price: 20,
        category: "Rotis & Breads"
    },
    {
        id: 7,
        name: "Panner Butter Masala",
        price: 180,
        category: "Starter"
    },
    {
        id: 8,
        name: "Chicken 65",
        price: 200,
        category: "Starter"
    },
    {
        id: 9,
        name: "Panner 65",
        price: 180,
        category: "Starter"
    },
    {
        id: 10,
        name: "Butter Chicken",
        price: 230,
        category: "Starter"
    }
];

console.log(document.getElementsByClassName('menu-items'));

for(let i=0;i<menuItemList.length;i++){
    let menuList = document.getElementsByClassName('menu-items')[0];
    menuList.insertAdjacentHTML("beforeend",`
            <div class="item-body" id="item${menuItemList[i]['id']}" draggable=true 
            ondragstart="handleDragStart(event,${menuItemList[i]['id']})"">
                <h2 class="itemName">${menuItemList[i]['name']}</h2>
                <p class="itemPrice">${menuItemList[i]['price']}</p>
                <p class = "itemCat"><h6>${menuItemList[i]['category']}</h5></p>
            </div>`);
}

//search items
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


// Tables List
const tables = [
    {
        id : 1,
        name : "Table-1",
        tableItemList : new Map(),
        price : 0,
        quantity : 0
    },
    {
        id : 2,
        name : "Table-2",
        tableItemList : new Map(),
        price : 0,
        quantity : 0
    },
    {
        id : 3,
        name : "Table-3",
        tableItemList : new Map(),
        price : 0,
        quantity : 0
    },
    {
        id : 4,
        name : "Table-4",
        tableItemList : new Map(),
        price : 0,
        quantity : 0
    },
];

// to show tables
for(let i=0;i<tables.length;i++){
    let tableList = document.getElementsByClassName('table')[0];
    tableList.insertAdjacentHTML("beforeBegin",
            `<div class="table-body" id="table${tables[i].id}"  
            onclick="orderDetails(event)">
                <h2 class="tableName">${tables[i]['name']}</h2>
                <p id="table-totalPrice${tables[i].id}">Total :&nbsp ${tables[i]['price']}&nbsp Rs</p>
                <p id="table-totalItems${tables[i].id}">No of items : ${tables[i]['quantity']} </p>
            </div>`

    );
}
//----Search for Table
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


let tabId;


// to show orderDetails
function orderDetails(event){
    document.querySelector(".table-details").style.visibility = "visible";
    document.querySelector('body').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementById(event.target.id).style.backgroundColor="rgb(0, 0, 255,0.5)";
    document.getElementById(event.target.id).style.color="rgb(255, 255, 255,1)";
    document.querySelector('.tables').className += " child-events";
    let tableId = event.target.id.match(/\d+/g); 
    console.log('this is table'+tableId);
    let header = document.getElementById('order-header');
    header.textContent = `Table-${tableId} | Order Details`;
    renderOrderItems(tableId);
    tabId = tableId;
}

//------------- Order Details-------------------

function renderOrderItems(tableId){
    console.log("this is table id "+tableId);
    let currentTable = tables[tableId-1];
    if(currentTable.quantity>0){
        let htmlString = "";
        htmlString += 
            `<tr>
                <th>S.No</th>
                <th>Item</th>
                <th>Price</th>
                <th>No of servings</th>
            </tr>`;
        let i = 1;
        let a =[];

        for (const [key, value] of currentTable.tableItemList.entries()) {
            if(i<=currentTable['tableItemList'].size){

                htmlString +=`
                <tr>
                    <td>${i}</td>
                    <td>${menuItemList[key-1]['name']}</td>
                    <td>${menuItemList[key-1]['price']}</td>
                    <td><input type=number id=quantity${key} class="quantity${key}" min=0  value="${value}" onchange="updateQuantity(${tableId},${key})"></td> 
                    <td><img class="trashicon" id="trashicon${key}" onclick="deleteItem('${tableId-1}',${key})" src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"/></td>
                </tr>`; 
                i++;
            }

            var localstorage = {
                id :i-1,
                item: menuItemList[key-1]['name'],
                price: menuItemList[key-1]['price'],
                quantity : value,
                key :key
            }

            a.push(localstorage);

            localStorage.setItem('Table'+tableId, JSON.stringify(a));

            var retrievedObject = localStorage.getItem('Table'+tableId);
            var abc = JSON.parse(retrievedObject);
            console.log('retrievedObject: ', abc.length);
            console.log(abc[0].price);
            document.getElementById("table-items").innerHTML = htmlString;
        }
        document.querySelector('#total-price').textContent = "Total : " +currentTable.price;
    }else{
        document.getElementById("table-items").innerHTML = `<div style="margin : 22px 159px;font-size:25px">Order&nbsp;list&nbsp;is&nbsp;empty</div>`;
        document.querySelector('#total-price').textContent = "Total : "+currentTable.price;
    }
    document.querySelector('.closeButton').id = tableId;
}
function closeTableDetails(event){
    document.querySelector(".table-details").style.visibility = "hidden";
    document.querySelector('.tables').className = "tables";
    document.querySelector('body').style.backgroundColor = "white";
    document.getElementById(`table${event.target.id}`).style.backgroundColor="inherit";
    document.getElementById(`table${event.target.id}`).style.color="rgba(0, 0, 0, 1)";
}


//drag and drop
document.body.addEventListener('drop', handleDrop);
document.body.addEventListener('dragover', handleOver);

var selectedItemId;
function handleDragStart(event,id){
    selectedItemId = id;
    let obj = event.target;
    if(!obj.closest('draggable')) return;
    event.dataTransfer.setData("text", event.target.id);
    event.preventDefault();
}

function handleOver(event){
    event.preventDefault();
}

function handleDrop(event){

let drop = event.target;
event.preventDefault();
let tableId = event.target.id.match(/\d+/g);
let currentTable = tables[tableId-1];
let items = currentTable.tableItemList;
console.log(currentTable.tableItemList.size);
if(items.size > 0 && items.get(selectedItemId)!=undefined){
    items.set(selectedItemId,items.get(selectedItemId)+parseInt(1));
}else{
    items.set(selectedItemId,1);
}
currentTable['price'] += menuItemList[selectedItemId-1]['price'];
currentTable['quantity']++
document.getElementById(event.target.id).style.backgroundColor="inherit";
document.getElementById("table-totalPrice"+tableId).textContent = "Total : " + currentTable['price']+" Rs "; 
document.getElementById("table-totalItems"+tableId).textContent = "No of items :" +currentTable['quantity'];
}

function deleteItem(tableId,itemId){
    var count = tables[tableId].tableItemList.get(itemId);
    price = menuItemList[itemId-1].price;
    tables[tableId].price -= price * count;
    tables[tableId].quantity -= count;
    tables[tableId].tableItemList.delete(itemId);
    document.getElementById("table-totalPrice"+(parseInt(tableId)+1)).textContent = "Total : " + tables[tableId]['price']+" Rs "; 
    document.getElementById("table-totalItems"+(parseInt(tableId)+1)).textContent = "No of items :" +tables[tableId]['quantity'];
    renderOrderItems(parseInt(tableId)+1);
}

function updateQuantity(tableId,itemId){
    let currentTable = tables[tableId-1];
    let newQuantity = document.querySelector(".quantity"+itemId).value;
    if(newQuantity==0){
        if (confirm("Want to remove from the list")) {
            deleteItem(tableId-1,itemId);
          } else {
            return;
          }
        
    }
    else{
        let oldQuantity = currentTable.tableItemList.get(itemId);
        let price = menuItemList[itemId-1].price;
        let oldPrice = (oldQuantity*price);
        let newPrice = (newQuantity*price);
        currentTable.price += (newPrice-oldPrice);
        currentTable.quantity += (newQuantity - oldQuantity);
        currentTable.tableItemList.set(itemId,newQuantity);
    }

    document.getElementById("table-totalPrice"+(parseInt(tableId))).textContent = "Total : " + currentTable['price']+" Rs "; 
    document.getElementById("table-totalItems"+(parseInt(tableId))).textContent = "No of items :" +currentTable['quantity'];
    renderOrderItems(parseInt(tableId));
    
}

function generateBill(){
    console.log("this is Table"+tabId);
    let bill = document.getElementById("total-price").textContent;
    alert(`Total Bill : ${bill}`);

     var retrievedObject = localStorage.getItem('Table'+tabId);
     var contentList = JSON.parse(retrievedObject);
    for(let a = 0;a<contentList.length;a++){
         deleteItem(tabId-1,contentList[a].key);
    }
    localStorage.removeItem('Table'+tabId);
}


