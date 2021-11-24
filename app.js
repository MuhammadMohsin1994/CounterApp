const increment = ()=>
{
    let count = document.getElementById("counter").innerHTML;
    if(count>=0)
    {
        count = Number(count)+1;
        document.getElementById("counter").innerHTML = count;
    }
}

const decrement = ()=>
{
    let count = document.getElementById("counter").innerHTML;
    if(count>0)
    {
        count = Number(count)-1;
        document.getElementById("counter").innerHTML = count;
    }
}
const reset = ()=>
{
        let count = 0;
        document.getElementById("counter").innerHTML = count;
}