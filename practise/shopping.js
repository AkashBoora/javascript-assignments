const input = document.getElementById("item");
const button = document.querySelector("button");
const list = document.querySelector("ul")

button.addEventListener('click', () => {
    const item = input.value;
    input.value = '';

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");
    listItem.textContent = item;
    listBtn.textContent = "Delete";

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener('click',() => {
        list.removeChild(listItem);
    });
});