let a = null;
let b = null;
let newLine = false;
let lastOperation = null;
let currentOperation = null;
let afterEqual = false;
let divideByZero = false;

document.addEventListener('keyup', (event) => {

    if (event.key >= 0 && event.key <= 9) {
        buttonNumber(event.key);
    } else if (event.key == '+') {
        buttonOperator('add');
    }else if (event.key == '-') {
        buttonOperator('subtract');
    } else if (event.key == '/' || event.key == '\\') {
        buttonOperator('divide');
    } else if (event.key == 'x' || event.key == '*') {
        buttonOperator('multiply');
    } else if (event.key == '=' || event.key == 'Enter') {
        buttonEqual();
    } else if (event.key == 'Backspace') {
        buttonBS()
    } else if (event.key == '.') {
        buttonDecimal()
    } else {};
});

function buttonNumber(a) {

    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');
    var num = document.createTextNode(a);
    var subNum = document.createTextNode(a);
    
        if (a == '0' && screen.innerText == '0') {
            //No numbers starting with double zeros
        } else if (afterEqual == true) {
            buttonClear();
        
        } else if (newLine == true) {
            screen.innerText = '';
            screen.appendChild(num);
            sub.appendChild(subNum);
            newLine = false;
            afterEqual = false;
        } else {
            screen.appendChild(num);
            sub.appendChild(subNum);
            afterEqual = false;
        };

    };



function buttonDecimal() {
    
    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');
    var num = document.createTextNode('.');
    var subNum = document.createTextNode('.');

    if (screen.innerText.includes('.')) {
        //Do nothing if number already has a decimal
    } else {
        screen.appendChild(num);
        sub.appendChild(subNum);
        newLine = false;
    };
};

function buttonClear() {
    
    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');

    screen.innerText = '';
    sub.innerText='';
    a = null;
    b = null;
    lastOperation = null;
    afterEqual = false;

};

function buttonBS() {
    
    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');

    if (isNaN(screen.innerText) || screen.innerText == '' || afterEqual == true) {
        //Do nothing if screen doesn't show a number
    } else {
    var screenText = screen.innerText
    var subText = sub.innerText
    var screenText = screenText.split('')
    var subText = subText.split('')
    screenText.pop()
    subText.pop()
    var screenText = screenText.join('')
    var subText = subText.join('')
    
    screen.innerText = screenText;
    sub.innerText = subText;
    };

};

function buttonOperator(op) {

    if (newLine) {
        //Do nothing if a number hasn't been selected since last operator button was pressed
    } else {

        if (lastOperation == null) {lastOperation = op};

        currentOperation = op;

        var sub = document.getElementById('subscreen');
        
        if (afterEqual == true) {
            sub.innerText = String(a);
            afterEqual = false;
        }

        operate();
    };
};

function buttonEqual() {

    if (afterEqual == true) {
        //Don't do anything if 'Equal' was just pressed
    } else {

    operate();
    
    if (divideByZero) {
        //Don't change subscreen if dumb user divides by zero
    } else {
    
        var sub = document.getElementById('subscreen');
        var screen = document.getElementById('screen')
        a = screen.innerText
    
        var str = sub.innerText
        var str = str.split(' ')
        str.pop()
        var str = str.join(' ')

        sub.innerText = str + ' = ' + a

        b = null

        afterEqual = true;
        lastOperation = null;
        newLine = false;
    
        };

    }

}

function operate() { 

    var screen = document.getElementById('screen')
    var sub = document.getElementById('subscreen');
    a = screen.innerText

    var symbol = ''
    if (currentOperation == 'add') {var symbol = '+'}
    else if (currentOperation == 'subtract') {var symbol = '-'}
    else if (currentOperation == 'multiply') {var symbol = 'x'}
    else {var symbol = '/'}

    var num = document.createTextNode(' ' + symbol + ' ');
    
    if (a == '') {
        //Don't start adding if screen is blank
    } else if (b === null) {

        b = a
        screen.innerText = ''
        sub.appendChild(num);

    } else {

        if (lastOperation == 'add') {
            
            var sum = 0;
            sum = Number(b) + Number(a);
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;

            console.log(a + ' ' + b)

            lastOperation = currentOperation

        } else if (lastOperation == 'subtract') {

            var sum = 0;
            sum = Number(b) - Number(a);
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;

            lastOperation = currentOperation

        } else if (lastOperation == 'multiply') {

            var sum = 0;
            sum = Number(a) * Number(b);
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;
            
            lastOperation = currentOperation

        } else {

            if (b == null) {

                b = a
                screen.innerText = ''
                sub.appendChild(num);
                newLine = true;
                lastOperation = 'divide';
    
    
            } else if (a == '0' || b == '0') {
    
                screen.innerText = 'You Divided by Zero.\nUniverse Imploding.'
                sub.innerHTML = '';
                divideByZero = true;
                newLine = true;
                console.log('You fool! You have divided by Zero. May God have mercy on us!');
    
            } else {
    
            var sum = 0;
            sum = Number(b) / Number(a);
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;
            
            lastOperation = currentOperation

            };
        };
    };
};