let a = null;
let b = null;
let newLine = true;
let lastOperation = '';

function buttonOne() {
  
    var screen = document.getElementById('screen')
    var num = document.createTextNode('1')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonTwo() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('2')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonThree() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('3')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonFour() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('4')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonFive() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('5')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonSix() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('6')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonSeven() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('7')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonEight() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('8')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonNine() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('9')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonZero() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('0')

    if (newLine == true) {
        screen.innerText = ''
        screen.appendChild(num);
        newLine = false;
    } else {
        screen.appendChild(num);
    };
};

function buttonDecimal() {
    
    let screen = document.getElementById('screen')
    var num = document.createTextNode('.')

    if (screen.innerText.includes('.')) {
        //Do nothing if number already has a decimal
    } else {
    screen.appendChild(num);
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
    operate();

};

function buttonSub() {

    if (lastOperation == '') {lastOperation = 'subtract'};
    operate();

};

function buttonMult() {

    if (lastOperation == '') {lastOperation = 'multiply'};
    operate();

};

function buttonDiv() {

    if (lastOperation == '') {lastOperation = 'divide'};
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

}

function operate() { 

    var screen = document.getElementById('screen')
    var sub = document.getElementById('subscreen');
    a = screen.innerText

    var symbol = ''
    if (lastOperation == 'add') {var symbol = '+'}
    else if (lastOperation == 'subtract') {var symbol = '-'}
    else if (lastOperation == 'multiply') {var symbol = 'x'}
    else {var symbol = '/'}

    var num = document.createTextNode(a + ' ' + symbol + ' ');
    
    if (a == '') {
        //Don't start adding if screen is blank
    } else if (b === null) {

        b = a
        screen.innerText = ''
        sub.appendChild(num);

    } else {

        if (lastOperation == 'add') {
            
            var sum = 0;
            sum = Number(a) + Number(b);
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;
            lastOperation = 'add';
            console.log(a + ' + ' + c + ' = ' + sum )

        } else if (lastOperation == 'subtract') {

            var sum = 0;
            sum = Number(b) - Number(a);
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;
            lastOperation = 'subtract';
            console.log(a + ' - ' + c + ' = ' + sum )

        } else if (lastOperation == 'multiply') {

            var sum = 0;
            sum = Number(a) * Number(b);
            c = b;
            b = sum;
            screen.innerText = sum;
            sub.appendChild(num);
            newLine = true;
            lastOperation = 'multiply';
            console.log(a + ' x ' + c + ' = ' + sum )

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
            lastOperation = 'divide';
            console.log(a + ' / ' + c + ' = ' + sum )
            };

        };
    };
    newLine = true;
};