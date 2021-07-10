const bill = document.getElementById('bill')
const person = document.getElementById('person')
const btns = document.querySelectorAll('.btn')
const tipValue = document.querySelector('.tip-value')
const totalValue = document.querySelector('.total-value')
const red = document.querySelector('.red')
const resetBtn = document.querySelector('.reset')

let billNumber = 1
let tipPercentage = 1
let personNumber = 1

person.addEventListener('input', (e)=> {
    personNumber = +e.target.value
    if(personNumber <= 0) {
        red.style.display = 'block'
        person.style.border = '1px solid red'
    } else {
        red.style.display = 'none'
        person.style.border = 'none'
    }
    calculateResults()
})

bill.addEventListener('input', (e)=> {
    billNumber = +e.target.value
    calculateResults()
})

btns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        removeActive()
        tipPercentage = +e.target.childNodes[0].textContent
        btn.classList.add('active')
        calculateResults()
    })
})

function removeActive() {
    btns.forEach(btn=> btn.classList.remove('active'))
}


function calculateResults() {
    let tipAmount = (billNumber * tipPercentage / 100) / personNumber
    let tipSum = tipAmount.toFixed(2)
    tipValue.innerText = tipSum.toString()
    console.log(tipAmount)

    let totatAmount = billNumber / personNumber + tipAmount
    let totalSum = totatAmount.toFixed(2)
    totalValue.innerText = totalSum.toString()
}

resetBtn.addEventListener('click', ()=> {
    window.location.reload()
})

