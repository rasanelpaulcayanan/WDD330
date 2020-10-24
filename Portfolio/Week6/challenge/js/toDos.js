var taskList = [];
window.onload = function() {
  if (JSON.parse(localStorage.getItem("taskList")) != null)
  taskList = JSON.parse(localStorage.getItem("taskList"));
  display();
  countTask();
  changeImage();
};




function addElement() {
  if (document.querySelector(".addTxt").value.trim() != "") {
  
    let content = document.querySelector(".addTxt").value.trim();
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) 
    + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    let toDo = {id:formatted_date, content:content, completed:false}
    taskList.push(toDo);
    if (localStorage.getItem("taskList") == null) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    } else {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
    display();
    location.reload();
  }
}
function display() {
  document.querySelector(".list").innerHTML = "";
  for (var i = 0; i < taskList.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div class='tasks'>" +

      "<img class='tick' id='strike"+i+"' src = 'images/box.png' onclick='strike(" +
      i +
      ");changeImage();'>" +taskList[i].content +  "<img class='redx' src = 'images/redx.png' onclick='del(" +
      i +
      ")'></div></center><br>";
}
function del(index) {
  taskList.splice(index, 1);
  if (localStorage.getItem("taskList") == null) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  } else {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }
  display();
  location.reload();
}
function strike(index) {
  if (taskList[index].content.includes("<strike>")) {
    taskList[index].content = taskList[index].content.replace("<strike>", "");
    taskList[index].completed = false;
  } else {
    taskList[index].content = "<strike>" + taskList[index].content + "</strike>";
    taskList[index].completed = true;  
    

  }
  if (localStorage.getItem("taskList") == null) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  } else {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  display();
  // location.reload();
}

function changeImage()
{
  for (var i = 0; i < taskList.length; i++)
  {
    let image = document.getElementById('strike'+i);

    if (taskList[i].completed == true)
    {
      image.src = 'images/check-box.png';
    }
    
    else if (taskList[i].completed == false)
    {
      image.src = 'images/box.png';
    }
    

  }
}


function countTask()
{
taskCounter = 0;
  for (var i = 0; i < taskList.length; i++)
{
  if(taskList[i].completed == false)
  { taskCounter++;  }
}
document.getElementById('taskRemaining').innerHTML = taskCounter;
console.log(taskCounter);
}

function showAll()
{
  document.querySelector(".list").innerHTML = "";
  for (var i = 0; i < taskList.length; i++)
    document.querySelector(".list").innerHTML +=
    "<center><div class='tasks'>" +

    "<img class='tick' id='strike"+i+"' src = 'images/box.png' onclick='strike(" +
    i +
    ");changeImage();'>" +taskList[i].content +  "<img class='redx' src = 'images/redx.png' onclick='del(" +
    i +
    ")'></div></center><br>";
    changeImage();
}

function showActive()
{
 document.querySelector(".list").innerHTML = "";
 for (var i = 0; i < taskList.length; i++)
if(taskList[i].completed == false){
  document.querySelector(".list").innerHTML +=
  "<center><div class='tasks'>" +

  "<img class='tick' id='strike"+i+"' src = 'images/box.png' onclick='strike(" +
  i +
  ");changeImage();'>" +taskList[i].content +  "<img class='redx' src = 'images/redx.png' onclick='del(" +
  i +
  ")'></div></center><br>";
    }
    changeImage();
}

function showCompleted()
{
  document.querySelector(".list").innerHTML = "";
 for (var i = 0; i < taskList.length; i++)
if(taskList[i].completed == true){
  document.querySelector(".list").innerHTML +=
  "<center><div class='tasks'>" +

  "<img class='tick' id='strike"+i+"' src = 'images/box.png' onclick='strike(" +
  i +
  ");changeImage();'>" +taskList[i].content +  "<img class='redx' src = 'images/redx.png' onclick='del(" +
  i +
  ")'></div></center><br>";
    }
    changeImage();
}