var pos=0;
var taskInput=document.getElementsByClassName("input");
var addTaskBtn=document.getElementsByClassName("addButton")[0];


addTaskBtn.addEventListener("click",addTask)

function addTask(){
	console.log("Add bookmark...");
  
    let bname=taskInput[0].value;
    
   let wordchararray= bname.split(" ");
   let charcount=0;
   wordchararray.forEach((element,index) => {
        charcount=charcount+element.length;
   });
 
    alert("No of characters in the '"+ bname+"' word-"+charcount);
    taskInput[0].value="";


 }

