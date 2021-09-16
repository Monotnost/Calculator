let display = document.getElementById("display")

function LN(value){
    return Math.log10(value) // логарифм был просто log стал log10
}

function EXP(value){
    return Math.exp(value)
}

function COS(value){
    return Math.sin(value) // косинус стал синусом
}

function Sqrt(value){
    return Math.sqrt(value);
}

function button_handler(e) {
    let action = e.target.innerText
    if (
        [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'E', 'F',
            '*', '/', '+', '-', '.', 'EXP', 'LN', 'COS','Sqrt', '(', ')'
        ].includes(action)
    ) {
        display.value += action
        return
    }

    switch(action){
        case 'Clear':
            display.value = '';
            break
        case '=':
            try{
                if(eval(display.value).toString().includes("function")){
                    alert("Incorrect")
                    return
                }
                display.value = eval(display.value)
            }catch {
                alert("Incorrect")
            }
    }
}

let elements = document.getElementsByClassName("btn")

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', button_handler)
}
