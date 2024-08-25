const display = document.getElementById('display')
const btn = document.querySelectorAll('.btn')
const clear = document.getElementById('clear')
const equals = document.getElementById('equals')

btn.forEach(function(button){
    button.addEventListener('click', function(){
        display.value += button.getAttribute('data-value')
    })
})

equals.addEventListener('click', function(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error!"
    }
})

clear.addEventListener('click',function(){
    display.value = ""
})