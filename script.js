//1. Variablen
const box = document.querySelector('.calc')


//2. Funktionen
function calculateResult(num1, num2, operator){
    switch (operator) {
        case 'minus':
            return num1 - num2
        case 'plus':
            return num1 + num2
        case 'multi':
            return num1 * num2
        case 'div':
            return num1 / num2
        case 'modulo':
            let result =  num1 % num2
            return  result !== result ? 0 : result
    }
    return 0
}



function boxEvent(event){
    //get operation und ElternDiv
    const parentDiv = event.target.closest('div') 
    const operator = parentDiv.id


    //Input Felder geholt
    const inputs = parentDiv.querySelectorAll('input')
    console.log(inputs)
    

    //Rechung gestartet
    let result = calculateResult(Number(inputs[0].value), Number(inputs[1].value), operator)


    // Ergebnis ausgeben
    inputs[2].value = result
}

//3. Event Listener 
box.addEventListener('keyup', boxEvent)