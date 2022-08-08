const link = document.querySelector('a');
link.textContent = "Google";
link.href = "https://google.com";
const a =document.querySelectorAll('a');
console.log(a);
a.forEach(function(tag){
    tag.textContent="google";
});

const myPTag = document.getElementById("myPTag");
myPTag.style.color="blue";

const section = document.querySelector('section');

const para = document.createElement('p')
para.textContent = "Creating new element";
section.appendChild(para);

const text = document.createTextNode(" This is text content created by java script");
para.appendChild(text);

//section.removeChild(para);
//para.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.setAttribute('class', 'highlight');
