function display(val){
    if(document.getElementById("Result").value==='0'){
        document.getElementById("Result").value=val;
    }else{
        document.getElementById("Result").value+=val; 
    }
}
function clr(){
    document.getElementById("Result").value="0";
}
function solve(){
    let command=document.getElementById("Result").value;
    let checkvalue=eval(command);
    if(checkvalue%1=="0"){
        document.getElementById("Result").value=eval(command);
    }else{
        document.getElementById("Result").value=eval(command).toFixed(2);
    }
 
}
function Removelast(){
    let currentvalue=document.getElementById("Result").value;
    if(currentvalue.length>0){
        document.getElementById("Result").value=currentvalue.slice(0,currentvalue.length-1);
        currentvalue.length--;
    }else{
        document.getElementById("Result").value="0";
    }
}
