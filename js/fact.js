i=1
function onClick(){
    let x=parseInt(document.getElementById("t1").value)
    setTimeout(()=>{document.getElementById("ans").textContent=`${factorial(x)}`

    })
    

}
function factorial(x)
{
    if(x==1||x==0)
    {
        return 1
    }
    else 
    {
        return x*factorial(x-1)
    }
}