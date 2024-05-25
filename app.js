var display = document.getElementById('display');
var keys = document.querySelectorAll('.keys button');

var calculator = {
    displayValue: '',
    firstOperand: '',
    operator: '',
    secondOperand: '',
    result: '',

    init: function() {
        keys.forEach(key => {
            key.addEventListener('click', event => {
                this.handleKeyClick(event.target.id);
            });
        });
    },

    handleKeyClick: function(keyId) {
        switch (keyId) {
            case 'clear':
                this.clear();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'backspace':
                this.backspace();
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                this.setOperator(keyId);
                break;
            case 'equals':
                this.calculate();
                break;
            default:
                this.appendNumber(keyId);
        }
        this.updateDisplay();
    },

    clear: function() {
        this.displayValue = '';
        this.firstOperand = '';
        this.operator = '';
        this.secondOperand = '';
        this.result = '';
    },

    clearEntry: function() {
        this.displayValue = '';
    },

    backspace: function() {
        this.displayValue = this.displayValue.slice(0, -1);
    },

    setOperator: function(operator) {
        this.operator = operator;
     this.firstOperand = this.displayValue;
        this.displayValue = '';
    },

    appendNumber: function(number) {
        this.displayValue += number;
    },

    calculate: function() {
        this.secondOperand = this.displayValue;

        switch (this.operator) {
            case 'add':
                this.result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand);
                break;
            case 'subtract':
                this.result = parseFloat(this.firstOperand) - parseFloat(this.secondOperand);
                break;
            case 'multiply':
                this.result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand);
                break;
            case 'divide':
                this.result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand);
                break;
        }

        this.displayValue = this.result;
        this.firstOperand = this.result;
        this.operator = '';
        this.secondOperand = '';
    },

    updateDisplay: function() {
        display.value = this.displayValue;
    }
};


calculator.init();