const output1 = document.getElementById("kilos")
const output2 = document.getElementById("text") 
const button1 = document.getElementById("ptk")
const button2 = document.getElementById("ktp")

button1.onclick=function(){
    let num= document.getElementById("number").value
    let kilos = Number(num)/2.20462262   
    output2.textContent = ("this will be "+kilos+" in Kilos")
}

button2.onclick=function(){
    let num= document.getElementById("number").value
    let kilos = Number(num)*2.20462262
    output2.textContent=("this will be "+ kilos +" Pound")
}