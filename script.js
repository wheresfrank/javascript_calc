let a = null;
let b = null;
let newLine = true;
let lastOperation = '';
let currentOperation = '';
let afterEqual = false;

document.addEventListener('keyup', (event) => {

    if (event.key >= 0 && event.key <= 9) {
        buttonNumber(event.key);
    } else if (event.key == '+') {
        buttonPlus();
    }else if (event.key == '-') {
        buttonSub();
    } else if (event.key == '/' || event.key == '\\') {
        buttonDiv();
    } else if (event.key == 'x' || event.key == '*') {
        buttonMult();
    } else if (event.key == '=' || event.key == 'Enter') {
        buttonEqual();
    } else if (event.key == 'Backspace') {
        buttonBS()
    } else if (event.key == '.') {
        buttonDecimal()
    } else {};
});

function buttonNumber(a) {

    var screen = document.getElementById('screen')
    var sub = document.getElementById('subscreen');
    var num = document.createTextNode(a)
    var subNum = document.createTextNode(a)


    if (afterEqual == true) {
        buttonClear()
    }

    if (newLine == true) {
        screen.innerText = ''
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
    
    var screen = document.getElementById('screen')
    var sub = document.getElementById('subscreen');
    var num = document.createTextNode('.')
    var subNum = document.createTextNode('.')

    if (screen.innerText.includes('.')) {
        //Do nothing if number already has a decimal
    } else {
        screen.appendChild(num);
        sub.appendChild(subNum)
        newLine = false;
    };
};

function buttonClear() {
    
    var screen = document.getElementById('screen')    
    var sub = document.getElementById('subscreen')

    screen.innerText = ''
    sub.innerText=''
    a = null
    b = null
    lastOperation = '';
    afterEqual = false;

};

function buttonBS() {
    
    var screen = document.getElementById('screen')
    var num = screen.innerText
    var array = num.split('')
    array.pop()
    var array = array.join('')
    
    screen.innerText = array

};

function buttonPlus() {

    if (lastOperation == '') {lastOperation = 'add'};
    currentOperation = 'add'

    var sub = document.getElementById('subscreen');
    if (afterEqual == true) {sub.innerText = ''}

    operate();

};

function buttonSub() {

    if (lastOperation == '') {lastOperation = 'subtract'};
    currentOperation = 'subtract'

    var sub = document.getElementById('subscreen');
    if (afterEqual == true) {sub.innerText = ''}
    
    operate();

};

function buttonMult() {

    if (lastOperation == '') {lastOperation = 'multiply'};
    currentOperation = 'multiply'

    var sub = document.getElementById('subscreen');
    if (afterEqual == true) {sub.innerText = ''}

    operate();

};

function buttonDiv() {

    if (lastOperation == '') {lastOperation = 'divide'};
    currentOperation = 'divide'

    var sub = document.getElementById('subscreen');
    if (afterEqual == true) {sub.innerText = ''}
    
    operate();

};

function buttonEqual() {

    operate();    
    
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

            if (b === null) {

                b = a
                screen.innerText = ''
                sub.appendChild(num);
                newLine = true;
                lastOperation = 'divide';
    
    
            } else if (a == '0' || b == '0') {
    
                screen.innerText = 'You Divided by Zero.\nUniverse Imploding.'
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

            }

        };
    };
    newLine = true;
};