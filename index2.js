// console.dir(document)
// document.title = "Changed Title";
// console.log(document.childNodes[0].parentNode)
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

// var text = document.getElementsByClassName('title');
// text[0].style.color = 'green';
// text[0].style. fontWeight = 'bold';

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
