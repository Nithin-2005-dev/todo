const addInputs=()=>{
    console.log("called")
    if(!inputTodo || !inputDate || !inputTime){
        return;
    }else{
    items.push({todo:inputTodo,date:inputDate,time:inputTime,shake:[inputTime]});
    todoEvent.target.value="";
    dateEvent.target.value="";
    timeEvent.target.value="";
    localStorage.setItem("todos",JSON.stringify(items));
    addItems();
    }
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
    check();
}
document.getElementById("add").addEventListener("click",()=>{addInputs()});
let items=JSON.parse(localStorage.getItem("todos")) ?? [];
let inputTodo="";
let inputDate="";
let inputTime="";
let todoEvent="";
let dateEvent="";
let timeEvent="";
let time=new Date();
let getTime=time.getTime();
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
const innerCheck=(element)=>{
    let month="";
    if(time.getMonth().length==2) month=time.getMonth()+1;
    else month="0"+(time.getMonth()+1);
console.log(element.date)
console.log(time.getFullYear()+"-"+(month)+"-"+time.getDate())
if(element.shake[0]<=time.toTimeString().substring(0,5) && element.date<=time.getFullYear()+"-"+month+"-"+time.getDate()){
    console.log("entered")
    return true;
}
return false;
}
const check=()=>{
    let newItems=JSON.parse(localStorage.getItem("todos")) || [];
    let index=0;
    newItems.forEach(element => {
        if(innerCheck(element)===true){
            document.getElementById(`${index}`).classList.add("shake-it");
            console.log(document.getElementById(`${index}`).classList)
            console.log(index+"p")
        }else{
            document.getElementById(`${index}`).classList.remove("shake-it"); 
            console.log(index)
        }
        index++;
    });
}
addItems();
check()