const buttons = document.querySelectorAll(".input");
const result = document.querySelector("#output");
const clearBtn = document.querySelector("#clear");
const evaluateBtn = document.querySelector("#evaluate");
const deleteBtn = document.querySelector("#delete")

// display function
const appendValue = (value) => {
    result.value += value;
};

// functioning of buttons
buttons.forEach(button => {
    button.addEventListener("click" , () => {
        appendValue(button.textContent);
    });
});

// Evaluation
const output = () => {
    try {
            result.value = eval(result.value);
        } catch (e) {
            result.value = "ERROR";
        }
};

evaluateBtn.addEventListener("click" , output);

// clear display
const clear = ()=>{
    result.value = "";
};

clearBtn.addEventListener("click" , clear);

// backscpace function
const backspace = () =>  {
    result.value = result.value.slice(0,-1);
};

deleteBtn.addEventListener("click" , backspace);
