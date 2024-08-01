let formSub=document.querySelector("#formsub");
let input=document.querySelector("#input");
formSub.addEventListener("submit",(e)=>{
    e.preventDefault();
    let task=input.value;
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    input.value='';
    display();
  

})
function display(){
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    let group=document.querySelector("#group");
    if(taskList.length>=1){
        let eachTask='';
        for(task of taskList){
            eachTask+=` <li class="list-group-item mb-2 list" >
           <span> ${task}</span>
          
             <i class="fa-solid fa-circle-xmark icon" ></i> 
            
        </li>`
        }
        group.innerHTML=eachTask;
    }else{
        group.innerHTML='';
    }
}

display();
let group=document.querySelector("#group");
group.addEventListener("click",(e)=>{
    let target=e.target;
    if(target.classList.contains("fa-solid")){
        let acTarget=target.parentElement;
       
       let myContent= acTarget.innerText;
       console.log(myContent)
       let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
       let newTask=taskList.filter((task)=>{
        return task!==myContent;
       });
       
       localStorage.setItem('tasks',JSON.stringify(newTask));
       display();

    }
  
})
