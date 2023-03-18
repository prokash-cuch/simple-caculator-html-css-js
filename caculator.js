const result = document.getElementById("inputText") ;
let caculate =(Number)=>{
    result.value+=Number ;
}

let Result =()=>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Enter the valid input")
    }
}

function cle(){
    result.value = '';
}

function del(){
    result.value = result.value.slice(0,-1)
}