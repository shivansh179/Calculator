

function add() {
    const buttonValue = event.target.textContent;
    const output = document.querySelector(".calculator__output");
    if(output.textContent === "0"){
        output.textContent = buttonValue;
    }else{
        output.textContent += buttonValue;
    }

}

function reset(){
    const output = document.querySelector(".calculator__output");
    output.textContent = 0;
}


function calculate() {

    
    const output = document.querySelector(".calculator__output");
    
    let result = eval(output.textContent);
    
    output.textContent = result;
}


