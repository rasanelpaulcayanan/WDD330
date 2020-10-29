let AddcommentList = [];
window.onload = function() {
    if (JSON.parse(localStorage.getItem("commentList")) != null)
    AddcommentList = JSON.parse(localStorage.getItem("commentList"));
 
  };
  
  

function addAComment()
{
 
  let current_datetime = new Date()
  let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) 
  + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
  let content = document.getElementById('addComment').value;
  let hike = document.getElementById('hikeName').value;
  let comment = {date: formatted_date, content: content, name: hike};
  AddcommentList.push(comment);
 console.log(AddcommentList)
 
 if (localStorage.getItem("commentList") == null) {
  localStorage.setItem("commentList", JSON.stringify(AddcommentList));
} else {
  localStorage.setItem("commentList", JSON.stringify(AddcommentList));
}
location.reload();
}