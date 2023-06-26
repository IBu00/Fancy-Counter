
const increaseButtonEl = document.querySelector('.counter__button--increase')
const counterValueEl = document.querySelector('.counter__value')
const counterTitleEl = document.querySelector('.counter__title')
const decreaseButtonEl = document.querySelector('.counter__button--decrease')
const resetButtonEl = document.querySelector('.counter__reset-button')
const counterEl = document.querySelector('.counter')

function increamentCounter(){

    // store the current value
    const currentValue = counterValueEl.textContent;

    // convert current value from string to number
    const currentValueAsNum = +currentValue;

    // increament the current value by 1
    let newValue = currentValueAsNum + 1;

    // update the html element
    counterValueEl.textContent = newValue;

    if (counterValueEl.textContent > 5) {

        counterTitleEl.innerHTML = 'Limit! Buy <b>PRO</b> for > 5'
        counterValueEl.textContent = 5;
        counterEl.classList.add('counter__limit')

        increaseButtonEl.disabled = true;              
        decreaseButtonEl.disabled = true;    
        
        resetButtonEl.classList.add('counter__reset-icon--active')
    }
}

function decreamentCounter(){

    // store the current value
    const currentValue = counterValueEl.textContent;

    // convert current value from string to number
    const currentValueAsNum = +currentValue;

    // decreament the current value by 1
    const newValue = currentValueAsNum - 1;

    // update the html element
    counterValueEl.textContent = newValue;
    counterEl.classList.remove('counter__limit')
    counterTitleEl.textContent = 'FANCY COUNTER' 

    if (counterValueEl.textContent < 0) {
        counterValueEl.textContent = 0 
    }
}

function counterReset(){
    counterValueEl.textContent = 0;
    counterEl.classList.remove('counter__limit')
    counterTitleEl.textContent = 'FANCY COUNTER' 

    increaseButtonEl.disabled = false;              
    decreaseButtonEl.disabled = false;  

    resetButtonEl.classList.remove('counter__reset-icon--active')
}

increaseButtonEl.addEventListener('click', increamentCounter)

decreaseButtonEl.addEventListener('click', decreamentCounter)

resetButtonEl.addEventListener('click', counterReset)  