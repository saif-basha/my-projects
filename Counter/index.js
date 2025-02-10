let count =0
document.getElementById("add").onclick=function(){
    count++
    document.getElementById("count").innerHTML=count
}
document.getElementById("minus").onclick=function(){
    count--
    document.getElementById("count").innerHTML=count
}  
document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("count").innerHTML=count
}