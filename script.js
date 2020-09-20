let a = null;
let b = null;
let newLine = true;
let lastOperation = null;
let currentOperation = null;
let afterEqual = true;
let divideByZero = false;
let activeOperator = false;

function keyListener() {

    document.addEventListener('keydown', (event) => {

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
        } else if (event.key == '=' || event.keyCode === 13) {
            disableButtons();
            buttonEqual();
            setTimeout(enableButtons, 50);
         } else if (event.key == 'Backspace') {
            buttonBS();
        } else if (event.key == '.') {
            buttonDecimal();
        } else if (event.key == '%') {
            buttonPercent();
        } else {};
    });
};

function enableButtons() {
    document.querySelectorAll("button.numBtn").forEach(elem => {
        elem.disabled = false;
        });
    document.querySelectorAll("button.optBtn").forEach(elem => {
        elem.disabled = false;
        });
    document.querySelectorAll("button.numBtn").forEach(elem => {
        elem.disabled = false;
        });
    document.querySelectorAll("button.btn").forEach(elem => {
        elem.disabled = false;
        });
};

function disableButtons() {
    document.querySelectorAll('button.numBtn').forEach(elem => {
        elem.disabled = true;
        }); 
    document.querySelectorAll("button.optBtn").forEach(elem => {
        elem.disabled = true;
        });
    document.querySelectorAll("button.numBtn").forEach(elem => {
        elem.disabled = true;
        });
    document.querySelectorAll("button.btn").forEach(elem => {
        elem.disabled = true;
        });
}

keyListener();

function buttonNumber(a) {

    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');
    var num = document.createTextNode(a);
    var subNum = document.createTextNode(a);
    
    if (a == 0 && screen.innerText == '0') {
         return;
        //No numbers starting with double zeros
    };
    
    if (afterEqual) {
        buttonClear();
        // Clear screen when number is pressed if equal was the last button pressed
    };
    
    if (newLine) {
        screen.innerText = '';
        screen.appendChild(num);
        sub.appendChild(subNum);
        newLine = false;
        afterEqual = false;
    } else {
        screen.appendChild(num);
        sub.appendChild(subNum);
        afterEqual = false;
        newLine = false;
    };
};

function buttonNegative() {

    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');

    if (isNaN(screen.innerText) || screen.innerText == '') {

        return;

    } else {

        screen.innerText = -screen.innerText;
        var subArray = sub.innerText.split(' ');
        subArray.pop();
        var negative = screen.innerText;
        subArray.push(negative);
        var subArray = subArray.join(' ');
        sub.innerText = subArray;

    };
};

function buttonPercent() {

    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');

    if (isNaN(screen.innerText) || screen.innerText == '') {
        return;
    } else {

        var percent = screen.innerText / 100;
        var subArray = sub.innerText.split(' ');
        subArray.pop();
        subArray.push(percent)
        subArray = subArray.join(' ');
        sub.innerText = subArray;
        screen.innerText = percent;

    };
};

function buttonDecimal() {
    
    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');
    var num = document.createTextNode('.');
    var subNum = document.createTextNode('.');

    if (screen.innerText.includes('.')) {
        //Do nothing if number already has a decimal
    } else if (afterEqual) {

        buttonClear();

        screen.appendChild(num);
        sub.appendChild(subNum);
        newLine = false;
        afterEqual = false;

    } else {

        screen.appendChild(num);
        sub.appendChild(subNum);
        newLine = false;
        afterEqual = false;

    }
};

function buttonClear() {
    
    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');

    screen.innerText = null;
    sub.innerText = null;
    a = null;
    b = null;
    lastOperation = null;
    currentOperation = null;
    activeOperator = false;
    afterEqual = false;

    console.log('Poof! The screen has been cleared.');

};

function buttonBS() {
    
    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');

    if (isNaN(screen.innerText) || screen.innerText == '' || afterEqual) {
        //Do nothing if screen doesn't show a number, is blank, or equal was just pressed
    } else {
    var screenText = screen.innerText;
    var subText = sub.innerText;
    var screenText = screenText.split('');
    var subText = subText.split('');
    screenText.pop();
    subText.pop();
    var screenText = screenText.join('');
    var subText = subText.join('');
    
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
        };

        operate();
        newLine = true;
        activeOperator = true;

    };
};

function buttonEqual() {

    var screen = document.getElementById('screen')

    if (afterEqual || screen.innerText == null || (screen.innerText != null && activeOperator == false)) {
        //Don't do anything if 'Equal' was just pressed or operator key was just pressed
    } else {

    operate();
    
    if (divideByZero) {

        afterEqual = true;
        divideByZero = false;
        //Don't change subscreen if dumb user divides by zero

    } else {
    
        var sub = document.getElementById('subscreen');
        a = screen.innerText
    
        var str = sub.innerText
        var str = str.split(' ')
        str.pop()
        var str = str.join(' ')

        sub.innerText = str + ' = ' + a

        b = null;

        afterEqual = true;
        lastOperation = null;
        newLine = false;
    
        };
    };    
};

function operate() { 

    var screen = document.getElementById('screen');
    var sub = document.getElementById('subscreen');
    a = screen.innerText;

    var symbol = ''
    if (currentOperation == 'add') {var symbol = '+'}
    else if (currentOperation == 'subtract') {var symbol = '-'}
    else if (currentOperation == 'multiply') {var symbol = 'x'}
    else {var symbol = '\xF7'}

    var num = document.createTextNode(' ' + symbol + ' ');
    
    if (a == '') {
        //Don't start adding if screen is blank
    } else if (b == null) {

        b = a;
        screen.innerText = '';
        sub.appendChild(num);

    } else {

        if (lastOperation == 'add') {
            
            var sum = 0;
            sum = (Number(b) + Number(a));
            sum = roundAccurately(sum, 15)
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;

            console.log(c + ' plus ' + a + ' equals ' + b + '!');

            lastOperation = currentOperation;

        } else if (lastOperation == 'subtract') {

            var sum = 0;
            sum = Number(b) - Number(a);
            sum = roundAccurately(sum, 15)
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;

            console.log(c + ' minus ' + a + ' equals ' + b + '!');

            lastOperation = currentOperation;

        } else if (lastOperation == 'multiply') {

            var sum = 0;
            sum = Number(a) * Number(b);
            sum = roundAccurately(sum, 15)
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;

            console.log(c + ' times ' + a + ' equals ' + b + '!');
            
            lastOperation = currentOperation;

        } else {

            if (b == null) {

                b = a;
                screen.innerText = '';
                sub.appendChild(num);
                newLine = true;
                lastOperation = 'divide';    
    
            } else if (a == '0' || b == '0') {
    
                screen.innerText = 'You Divided by Zero!\nUniverse Imploding!';
                sub.innerText = 'Why? Why would you do this?';
                divideByZero = true;
                newLine = true;
                console.log('You fool! You have divided by Zero. May God have mercy on us!');
    
            } else {
    
                var sum = 0;
                sum = Number(b) / Number(a);
                sum = roundAccurately(sum, 15)
                c = b;
                b = sum;
                screen.innerText = sum;
                sub.appendChild(num);
                newLine = true;

                console.log(c + ' divided by ' + a + ' equals ' + b + '!');
                
                lastOperation = currentOperation;

            };
        };
    };

    function roundAccurately(num, places) {
        return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
    };
};