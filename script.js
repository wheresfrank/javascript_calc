function buttonOne() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('1')

    screen.appendChild(num);
};

function buttonTwo() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('2')

    screen.appendChild(num);
};

function buttonThree() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('3')

    screen.appendChild(num);
};

function buttonFour() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('4')

    screen.appendChild(num);
};

function buttonFive() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('5')

    screen.appendChild(num);
};

function buttonSix() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('6')

    screen.appendChild(num);
};

function buttonSeven() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('7')

    screen.appendChild(num);
};

function buttonEight() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('8')

    screen.appendChild(num);
};

function buttonNine() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('9')

    screen.appendChild(num);
};

function buttonZero() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('0')

    screen.appendChild(num);
};

function buttonDecimal() {
    
    var screen = document.getElementById('screen')
    var num = document.createTextNode('.')

    screen.appendChild(num);
};

function buttonClear() {
    
    var screen = document.getElementById('screen')

    screen.innerText = ''

};

function buttonBS() {
    
    var screen = document.getElementById('screen')
    var num = screen.innerText
    var array = num.split('')
    array.pop()
    var array = array.join('')
    
    screen.innerText = array

};