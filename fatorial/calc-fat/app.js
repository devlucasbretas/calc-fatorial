
let numInput  = document.getElementById("userNum")
let numOutput = document.getElementById("saida")
let button = document.getElementById("btn")
let buttonClear = document.getElementById("clr")

button.addEventListener("click", function(){

    function fatorialRec(n) {
        if (n === 0) return 1
        if (n === 1) return 1
        return n * fatorialRec(n - 1)
    }
    
    let num = numInput.value
    if(num > 0) {
        let result = fatorialRec(num)
        numOutput.innerHTML = `O Fatorial de: ${num} é ${result}`
    }

})

buttonClear.addEventListener("click", function(){
    numOutput.innerHTML = ""
    numInput.value = ""
})
