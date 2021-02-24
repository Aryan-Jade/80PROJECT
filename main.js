menu_list_array = ["Chicken tandoori pizza",
                  "Veg supreme pizza",
                  "Paneer tikka pizza",
                  "Deluxe veggie pizza",
                  "Veg extravaganza pizza"];

function addItem(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length; i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] +'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function getMenu(){
    var htmldata;
    var item=document.getElementById("add_menu").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='card'>"
    for(i=0; i<menu_list_array.length; i++){
        htmldata=htmldata+'<div class="card">' + '<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}