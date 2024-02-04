import React from "react";
import ReactDOM from "react";

let element = React.createElement('h1', 'This is React!');
ReactDOM.render(element, document.getElementById('app'));
//CRUD: Create, Read, Update, Delete

$.get(URL_ENDPOINT).then(data => {
    data.map(item => {
        $('t.body').append
    })
})

//Create item on grocery list

class Item {
    constructor(item) {
        this.item = Item;
        this.addItem = [];
    }
}


//Read or GET item

$(document).ready(() => {
    function fetchItem(){
        $ajax({
            url:''
            type: "GET"
            successor: (item) => {
                $("#itemList").append
            }
        })
    }
})


//Update, ie-button to add item

const newButton = document.createElement('button');
newButton.textContent = 'Update Item' ;
document.body.appendChild(newButton);



//Delete, ie-button to delete item
const deleteButton = document.deleteButton('button');
deleteButton.textContent = 'Delete Item' ;
document.body.appendChild(deleteButton);
