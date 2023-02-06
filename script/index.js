const sumElement = window.document.getElementById('sum').children[1]
const subtractionAB = window.document.getElementById('subtractionAB').children[1]
const subtractionBA = window.document.getElementById('subtractionBA').children[1]
const multiplicationElement = window.document.getElementById('multiplication').children[1]
const divisionAB = window.document.getElementById('divisionAB').children[1]
const divisionBA = window.document.getElementById('divisionBA').children[1]
const powerAB = window.document.getElementById('powerAB').children[1]
const powerBA = window.document.getElementById('powerBA').children[1]
const squareRootB = window.document.getElementById('squareRootB').children[1]
const squareRootA = window.document.getElementById('squareRootA').children[1]
const factorialA = window.document.getElementById('factorialA').children[1]
const factorialB = window.document.getElementById('factorialB').children[1]
const percentageAB = window.document.getElementById('percentageAB').children[1]
const percentageBA = window.document.getElementById('percentageBA').children[1]
const mediaElement = window.document.getElementById('media').children[1]

const calculateBtn = window.document.getElementById('calculate')
const primeiroNumero = window.document.getElementById('primeiroNumero')
const segundoNumero = window.document.getElementById('segundoNumero')

calculateBtn.addEventListener('click', () => {
    if (isNumber(primeiroNumero.value) && isNumber(segundoNumero.value)) {
        calc()
    }else {
        window.alert('Digite apenas números')
    }
})

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function calc(){
    const numberA = parseFloat(primeiroNumero.value)
    const numberB = parseFloat(segundoNumero.value)

    sumElement.innerHTML = sum(numberA, numberB)
    subtractionAB.innerHTML = subtraction(numberA, numberB)
    subtractionBA.innerHTML = subtraction(numberB, numberA)
    multiplicationElement.innerHTML = multiplication(numberA, numberB)
    divisionAB.innerHTML = division(numberA, numberB)
    divisionBA.innerHTML = division(numberB, numberA)
    powerAB.innerHTML = power(numberA, numberB)
    powerBA.innerHTML = power(numberB, numberA)
    squareRootB.innerHTML = squareRoot(numberB)
    squareRootA.innerHTML = squareRoot(numberA)
    factorialA.innerHTML = factorial(numberA)
    factorialB.innerHTML = factorial(numberB)
    percentageAB.innerHTML = `${percentage(numberA, numberB)}%`
    percentageBA.innerHTML = `${percentage(numberB, numberA)}%`
    mediaElement.innerHTML = media(numberA, numberB)
}

function sum(numberA, numberB){
    return numberA + numberB
}

function subtraction(numberA, numberB){
    return numberA - numberB
}

function multiplication(numberA, numberB){
    return numberA * numberB
}

function division(numberA, numberB){
    const result = numberA / numberB
    return result.toFixed(2)
}

function power(numberA, numberB){
    return Math.pow(numberA, numberB)
}

function squareRoot(number) {
    return Math.sqrt(number)
}

function factorial(number){
    return number <= 1 ? 1 : number * factorial(number - 1)
}

function percentage(numberA, numberB){
    const result = numberB * 100 / numberA
    return Math.round(result)
}

function media(numberA, numberB){
    return (numberA + numberB) / 2
}
