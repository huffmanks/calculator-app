const toggleSwitch = document.querySelector('#toggle-switch')
const toggleSwitchBall = document.querySelector('.toggle-switch-after')
const toggleOptions = document.querySelectorAll('.toggle-options span')

// Change Theme
toggleSwitch.addEventListener('click', (e) => {
    if (e.clientX - toggleSwitch.offsetLeft < 16) {
        updateTheme1()
    }
    if (e.clientX - toggleSwitch.offsetLeft > 15 && e.clientX - toggleSwitch.offsetLeft < 32) {
        updateTheme2()
    }
    if (e.clientX - toggleSwitch.offsetLeft > 31) {
        updateTheme3()
    }
})

toggleOptions.forEach((toggleOption) => {
    toggleOption.addEventListener('click', () => {
        if (toggleOption.innerText === '1') {
            updateTheme1()
        }
        if (toggleOption.innerText === '2') {
            updateTheme2()
        }
        if (toggleOption.innerText === '3') {
            updateTheme3()
        }
    })
})

// Update Theme
const updateTheme1 = () => {
    toggleSwitchBall.style.left = '2px'
    toggleSwitchBall.style.transform = 'translateX(0%)'
    const cls = ['theme-2', 'theme-3']
    document.body.classList.add('theme-1')
    document.body.classList.remove(...cls)
}

const updateTheme2 = () => {
    toggleSwitchBall.style.left = 'calc(61% - 3px)'
    toggleSwitchBall.style.transform = 'translateX(-61%)'
    const cls = ['theme-1', 'theme-3']
    document.body.classList.add('theme-2')
    document.body.classList.remove(...cls)
}

const updateTheme3 = () => {
    toggleSwitchBall.style.left = 'calc(100% - 3px)'
    toggleSwitchBall.style.transform = 'translateX(-100%)'
    const cls = ['theme-1', 'theme-2']
    document.body.classList.add('theme-3')
    document.body.classList.remove(...cls)
}

// Calc functions
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
// const outputEl = document.querySelector('#output')

// const calculator = new Calculator(outputEl)
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', (button) => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', (button) => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', (button) => {
    calculator.delete()
    calculator.updateDisplay()
})
