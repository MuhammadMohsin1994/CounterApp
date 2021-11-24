const add = () => {
    let num = document.getElementById("number")
    num.innerText = Number(num.innerText) + 1;
}
const less = () => {
    let num = document.getElementById("number")
    if(num.innerText !== "0"){
        num.innerText = Number(num.innerText) - 1;
    }
}