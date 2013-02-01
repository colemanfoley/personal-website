
// Initialization Code
var currentSelect = 1; // Keeps track of which select box is current

// New Select Box code
// function createNewField()
// {
    // var currentField = currentField + 1;
    // var nextField = currentField + 1;
    // document.getElementById('selectElement'+currentSelect).innerHTML = "<select>[code goes here]</select><span id=\"selectElement"+nextSelect+"\"></span>";
// }


function nameChange(){
	document.getElementById('checklistName').innerHTML=document.getElementById('checklistNameText').value;
}
var fieldIndex = 1;

function createNewField(){
fieldIndex = fieldIndex + 1;
var div = document.createElement("div");

div.innerHTML = '<input type="text" id="taskText"+fieldIndex onblur="createNewField()"/><br />';

document.body.appendChild(div);
div.id = "task"+fieldIndex;
// div.focus();
}

// function test(){
// document.getElementById('task2').innerHTML="hello";

// }

