//select element
const taskInput = document.getElementById("taskInput");
const addnewtask = document.getElementById("addnewtask");
const List = document.getElementById("List");

addnewtask.addEventListener("click",function(){
    const task=taskInput.value;

    if(task!=""){
        const li = document.createElement("li");
        li.innerText=task;

        List.appendChild(li);

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value=" ";
    }
});