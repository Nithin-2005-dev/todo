const addInputs=()=>{
    items.push({todo:inputTodo,date:inputDate,time:inputTime});
    todoEvent.target.value="";
    dateEvent.target.value="";
    timeEvent.target.value="";
    localStorage.setItem("todos",JSON.stringify(items));
    addItems();
}
const deleteItem=(e)=>{
    items.splice(e.target.id,1);
    localStorage.setItem("todos",JSON.stringify(items));
    addItems();
}
const addItems=()=>{
    let newItems=JSON.parse(localStorage.getItem("todos")) || [];
    document.getElementById("list").innerHTML=``;
    for(let i=0;i<newItems.length;i++)
    {
    document.getElementById("list").innerHTML+=`<div class="list-con">
        <div id="todo" class="items">${newItems[i].todo}</div>
        <div id="date-input" class="items">${newItems[i].date}</div>
        <div id="time-input" class="items">${newItems[i].time}</div>
        <button id=${i} class="delete items but" onclick=deleteItem(event)>delete</button>
    </div>`
    }
}
document.getElementById("add").addEventListener("click",()=>{addInputs()});
let items=JSON.parse(localStorage.getItem("todos")) ?? [];
let inputTodo="";
let inputDate="";
let inputTime="";
let todoEvent="";
let dateEvent="";
let timeEvent="";
document.getElementById("todo-input").addEventListener("change",(event)=>{
    inputTodo=event.target.value;
    todoEvent=event;
})
document.getElementById("time-input").addEventListener("change",(event)=>{
    inputTime=event.target.value;
    timeEvent=event;
})
document.getElementById("date-input").addEventListener("change",(event)=>{
    inputDate=event.target.value;
    dateEvent=event;
})
addItems();