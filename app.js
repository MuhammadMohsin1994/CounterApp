let count = 0;

const increment = () => {
    document.getElementById('showCounter').innerHTML = ++count;   
}

const decrement = () => {
    document.getElementById('showCounter').innerHTML = --count;
}

const reset = () => {
    document.getElementById('showCounter').innerHTML = 0;
    count = 0;
}