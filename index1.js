console.dir(document)
document.title = "Changed Title";
console.log(document.childNodes[0].parentNode)
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var text = document.getElementsByClassName('title');
text[0].style.color = 'green';
text[0].style. fontWeight = 'bold';