//document.getElementById("count-el").innerText = 5

var saveEl = document.getElementById("save")
var count = 0
var countEl = document.getElementById("count-el")
function increment(){   //function to increment count
    count = count + 1
    countEl.textContent = count
}

function decrement(){   //function to decrement count
    if (count > 0){
        count = count - 1
    }
    else{
        count = 0
    }
    
    countEl.textContent = count
}
function save(){   //function to save previous entries
    let content =  count + ' - '
    saveEl.textContent += content
    count = 0
    countEl.textContent = 0   //to display the entries as 0 after each time the save button is pressed
}
 

