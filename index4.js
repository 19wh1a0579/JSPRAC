
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
