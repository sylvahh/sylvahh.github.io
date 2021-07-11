var addButton = document.getElementById("add_button");

addButton.addEventListener("click", addToDoItem);
function addToDoItem(){
    // alert("add button clicked" );\
    var entryBox = document.getElementById("entry_box");
    var itemText = entryBox.value;
    newToDoItem(itemText, false);
}

function newToDoItem(itemText, completed){
    var toDoList = documemt.getElementById("toDo_list");
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

   if(completed){
        toDoItem.classList.add("completed");
   }
    toDoList.appendChild(toDoItem);
    document.body.appendChild(toDoItem)
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}





// ===========================================

function toggleToDoItemState(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed");
    }else{
        this.classList.add("completed");
    }
}

var saveButton = document.getElementById("save");
addButton.addEventListener("click", saveButton);
function saveButton (){
    alert("save button clicked" );
}
var addButton = document.getElementById("empty");
addButton.addEventListener("click", emptyButton);   
function emptyButton(){
    alert("empty  button clicked" );
}
var addButton = document.getElementById("clear");
addButton.addEventListener("click", clearButton);   
function clearButton(){
    alert("clear button clicked" );
}
