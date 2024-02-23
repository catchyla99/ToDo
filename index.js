

const inputBox= document.getElementById("input-box");
const addTask= document.getElementsByClassName("addTask");
const listContainer= document.getElementById("list-container")
function AddTask(){
   if(inputBox.value===''){
    alert("You have not entered any Task");
   }

   else {
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="&#10060";
    li.appendChild(span);
   }

   inputBox.value='';
   saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
// add tagNAme always capital or code doesnt work
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)


// false means bubbling(from exact element to parent elements) and is default


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    // saving existing data in browser local storage
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
    // getting saved data everytime we refresh
}

showData();