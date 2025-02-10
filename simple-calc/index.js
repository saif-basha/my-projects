document.getElementById("add")
document.getElementById("minus")
document.getElementById("divi")
document.getElementById("multi")
document.getElementById("output")
let answer;
add.onclick = function(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    output.textContent = Number(num1)+Number(num2)
} 
minus.onclick = function(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    output.textContent = Number(num1)-Number(num2)
} 
multi.onclick = function(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    output.textContent = Number(num1)*Number(num2)
} 
divi.onclick = function(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    output.textContent = Number(num1)/Number(num2)
} 