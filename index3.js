var list = document.getElementsByClassName('list-group-item');
console.log(list);
list[2].style.backgroundColor = 'yellow';
list[0].style.fontWeight = 'bold';


for(var i =0; i< list.length;i++){
    list[i].style.fontWeight = 'bold';
}
