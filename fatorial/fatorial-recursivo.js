
function fatorialRec(n) {
    if (n === 0) return 1
    if (n === 1) return 1
    return n * fatorialRec(n - 1)
}

let num = 5
if(num > 0) {
    let result = fatorialRec(num)
    console.log(`O Fatorial de: ${num} é ${result}`)
}

