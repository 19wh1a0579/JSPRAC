var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems)
//Add item
function addItem(e){
    e.preventDefault();


// Get input value
    var newItem = document.getElementById('item').value;
    var newDis = document.getElementById('discription').value;
    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    //Add text mode with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDis));
    // Create delete button element
    var deletebtn = document.createElement('button') 

    deletebtn.className = 'btn btn-danger btn.sm float-right delete'

    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);

    itemList.appendChild(li)

}

function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
   }  
}

//Filter Items
function filterItems(e){
    //convert to lower case

    var text = e.target.value.toLowerCase();
    // console.log(text);

    var items = itemList.getElementsByTagName('li');
    console.log(items)
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var item2 = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else if(item2.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none'
        }
    });
    
}
