let addbutton = document.getElementById("add")
let todos = document.getElementById("input")
let todoscontain=document.getElementById("todocontain")
// the first way to add the written to the list 
addbutton.onclick = function(){
    let paragraph = document.createElement('p')
    paragraph.innerText = todos.value
    todoscontain.appendChild(paragraph)
    todos.value = ""
    paragraph.onclick= function(){
        paragraph.style.textDecoration ='line-through'
    
    }
}




// this is the second way (i prefer the first) 
/*/ addbutton.addEventListener('click',function(){
    let paragraph = document.createElement('p')
    paragraph.innerText = todos.value
    todoscontain.appendChild(paragraph)
    todos.value = ""
    paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration ='line-through'
})*/