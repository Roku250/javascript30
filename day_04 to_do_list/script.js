var recuptext;
var enter = document.getElementById("bar");
var ul = document.getElementById("list");

enter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        addmsg();
    }
});


function addmsg() {
    
    recuptext = document.getElementById("bar").value;

    if (recuptext!=""){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(recuptext));
    ul.appendChild(li);
   
    document.getElementById("bar").value = "";
    }
}


ul.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle('isok');
    }
});

function clearall() {
   
    var listli = document.getElementsByTagName("li").length;
    var i;
    for( i =0; i<listli;i++){
        ul.removeChild(ul.childNodes[i]);
    }
}