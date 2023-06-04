console.dir(document)
document.title = "Changed Title";
console.log(document.childNodes[0].parentNode)
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var text = document.getElementsByClassName('title');
text[0].style.color = 'green';
text[0].style. fontWeight = 'bold';

var list = document.getElementsByClassName('list-group-item');
console.log(list);
list[2].style.backgroundColor = 'yellow';
list[0].style.fontWeight = 'bold';

// var listId = document.getElementById('items');
// listId.style.fontWeight ='bold';

for(var i =0; i< list.length;i++){
    list[i].style.fontWeight = 'bold';
}

var listTag = document.getElementsByTagName('li');
for(var i =0; i< listTag.length;i++){
    listTag[i].style.fontWeight = 'bold';
}


//making the background of 2nd item green
var header = document.querySelector(".list-group-item:nth-child(2)");
header.style.backgroundColor = "green";

//making 3rd item invisible
var header2 = document.querySelector(".list-group-item:nth-child(3)");
header2.style.display = "none";


//making the 2nd color font color green
var titles = document.querySelectorAll(".list-group-item");
titles[1].style.color = "green";

//making odd items background green
var odd = document.querySelectorAll(".list-group-item:nth-child(odd)");


for(var i = 0; i< odd.length;i++){
    odd[i].style.backgroundColor = "green";

}

//TRAVERSING THE DOM

var itemList = document.querySelector("#items");


// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "grey";
//childNode and children
console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.color = "pink"

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = "blue";

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.innerText = "hey man";

//nextSibling
console.log(itemList.nextSibling);

//nextEleemntSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previouElementSibling
console.log(itemList.previousElementSibling.previousElementSibling);

// appendChild


//Creating DOM elements and insert them

//createelement

var newDiv = document.createElement('div');

newDiv.className = 'new class'
newDiv.id = 'new id'

newDiv.setAttribute('title','new attribute added');

console.log(newDiv.className)

var newDivText = document.createTextNode("Hello World");

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv)

newDiv.style.fontSize = '40px'
container.insertBefore(newDiv,h1);

//inserting item  6 before item 1
var itemdiv = document.createElement('li');
itemdiv.className = 'new class 6'
itemdiv.className = "list-group-item"
var itemtext = document.createTextNode("item 6");
itemdiv.appendChild(itemtext);

// console.log(itemdiv)
var cont = document.querySelector(".list-group");
var item1 = document.querySelector("#items")
cont.insertBefore(itemdiv, item1.firstElementChild);
