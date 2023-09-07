
function display(disValue)
{
    let v = document.getElementById("result")
    v.value += disValue;
}

function solveFunc()
{
    let x = document.getElementById("result").value ;
    console.log(x);
    let y = eval(x);
    document.getElementById("result").value = y; 
    console.log(y);
}

function Clear() 
    {
    let c = document.getElementById("result");
        c.value = '';
     }

