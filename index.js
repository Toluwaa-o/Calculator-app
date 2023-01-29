let vr = document.querySelector(':root');
let toggle = document.querySelector('.toggle')
let toggler = document.querySelectorAll('.toggleSet')

function toggleColor(){
    if(toggle.style.justifyContent === 'center'){
        vr.style.setProperty('--bodyBG', 'hsl(0, 0%, 90%)')
        vr.style.setProperty('--keypadBG', 'hsl(0, 5%, 81%)')
        vr.style.setProperty('--toggleBG', 'hsl(6, 63%, 50%)')
        vr.style.setProperty('--toggleHV', 'hsl(6, 85%, 61%)')
        vr.style.setProperty('--headTxtColor', 'hsl(60, 10%, 19%)')
        vr.style.setProperty('--screenBG', 'hsl(0, 0%, 93%)')
        vr.style.setProperty('--delresBG', 'hsl(185, 42%, 37%)')
        vr.style.setProperty('--delresSH', 'hsl(185, 58%, 25%)')
        vr.style.setProperty('--delresHV', 'hsl(185, 42%, 67%)')
        vr.style.setProperty('--equalBG', 'hsl(25, 98%, 40%)')
        vr.style.setProperty('--equalSH', 'hsl(25, 99%, 27%)')
        vr.style.setProperty('--equalHV', 'hsl(25, 65%, 60%)')
        vr.style.setProperty('--restBG', 'hsl(45, 7%, 89%)')
        vr.style.setProperty('--restSH', 'hsl(35, 11%, 61%)')
        vr.style.setProperty('--restHV', 'hsl(45, 0%, 100%)')
        vr.style.setProperty('--restTxtColor', 'hsl(60, 10%, 19%)')
        vr.style.setProperty('--otherTxtColor', 'hsl(0, 0%, 100%)')
        vr.style.setProperty('--equalTXT', 'hsl(0, 0%, 100%)')
        
    }else if(toggle.style.justifyContent === 'flex-end'){
        vr.style.setProperty('--bodyBG', 'hsl(268, 75%, 9%)')
        vr.style.setProperty('--keypadBG', 'hsl(268, 71%, 12%)')
        vr.style.setProperty('--toggleBG', 'hsl(176, 100%, 44%)')
        vr.style.setProperty('--toggleHV', 'hsl(176, 71%, 79%)')
        vr.style.setProperty('--headTxtColor', 'hsl(52, 100%, 62%)')
        vr.style.setProperty('--screenBG', 'hsl(268, 71%, 12%)')
        vr.style.setProperty('--delresBG', 'hsl(281, 89%, 26%)')
        vr.style.setProperty('--delresSH', 'hsl(285, 91%, 52%)')
        vr.style.setProperty('--delresHV', 'hsl(281, 92%, 52%)')
        vr.style.setProperty('--equalBG', 'hsl(176, 100%, 44%)')
        vr.style.setProperty('--equalSH', 'hsl(177, 92%, 70%)')
        vr.style.setProperty('--equalHV', 'hsl(176, 71%, 79%)')
        vr.style.setProperty('--restBG', 'hsl(268, 47%, 21%)')
        vr.style.setProperty('--restSH', 'hsl(290, 70%, 36%)')
        vr.style.setProperty('--restHV', 'hsl(268, 66%, 53%)')
        vr.style.setProperty('--restTxtColor', 'hsl(52, 100%, 62%)')
        vr.style.setProperty('--otherTxtColor', 'hsl(0, 0%, 100%)')
        vr.style.setProperty('--equalTXT', 'hsl(198, 20%, 13%)')
    }else {
        vr.style.setProperty('--bodyBG', 'hsl(222, 26%, 31%)')
        vr.style.setProperty('--keypadBG', 'hsl(223, 31%, 20%)')
        vr.style.setProperty('--toggleBG', 'hsl(6, 63%, 50%)')
        vr.style.setProperty('--toggleHV', 'hsl(6, 85%, 61%)')
        vr.style.setProperty('--headTxtColor', 'hsl(0, 0%, 100%)')
        vr.style.setProperty('--screenBG', 'hsl(224, 36%, 15%)')
        vr.style.setProperty('--delresBG', 'hsl(225, 21%, 49%)')
        vr.style.setProperty('--delresSH', 'hsl(224, 28%, 35%)')
        vr.style.setProperty('--delresHV', 'hsl(224, 31%, 78%)')
        vr.style.setProperty('--equalBG', 'hsl(6, 63%, 50%)')
        vr.style.setProperty('--equalSH', 'hsl(6, 70%, 34%)')
        vr.style.setProperty('--equalHV', 'hsl(6, 85%, 61%)')
        vr.style.setProperty('--restBG', 'hsl(30, 25%, 89%)')
        vr.style.setProperty('--restSH', 'hsl(28, 16%, 65%)')
        vr.style.setProperty('--restHV', 'hsl(36, 38%, 97%)')
        vr.style.setProperty('--restTxtColor', 'hsl(221, 14%, 31%)')
        vr.style.setProperty('--otherTxtColor', 'hsl(0, 0%, 100%)')
        vr.style.setProperty('--equalTXT', 'hsl(0, 0%, 100%)')
    }
}

toggler[0].addEventListener('click', function(){
    toggle.style.justifyContent = 'flex-start'
    toggleColor()
})

toggler[1].addEventListener('click', function(){
    toggle.style.justifyContent = 'center'
    toggleColor()
})

toggler[2].addEventListener('click', function(){
    toggle.style.justifyContent = 'flex-end'
    toggleColor()
})

let output = document.querySelector('.output')
let zero = document.getElementById('zero')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let deletebtn = document.getElementById('delete')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let equal = document.getElementById('equal')
let reset = document.getElementById('reset')
let divide = document.getElementById('divide')
let dot = document.getElementById('dot')

zero.addEventListener('click', function(){
    output.textContent += '0';
})

one.addEventListener('click', function(){
    output.textContent += '1';
})

two.addEventListener('click', function(){
    output.textContent += '2';
})

three.addEventListener('click', function(){
    output.textContent += '3';
})

four.addEventListener('click', function(){
    output.textContent += '4';
})

five.addEventListener('click', function(){
    output.textContent += '5';
})

six.addEventListener('click', function(){
    output.textContent += '6';
})

seven.addEventListener('click', function(){
    output.textContent += '7';
})

eight.addEventListener('click', function(){
    output.textContent += '8';
})

nine.addEventListener('click', function(){
    output.textContent += '9';
})

dot.addEventListener('click', function(){
    output.textContent += '.';
})

deletebtn.addEventListener('click', function(){
    let str = output.textContent;
    str = str.slice(0, -1);
    output.textContent = str;
})

reset.addEventListener('click', function(){
    output.textContent = ''
})

plus.addEventListener('click', function(){
    output.textContent += '+';
})

minus.addEventListener('click', function(){
    output.textContent += '-';
})

divide.addEventListener('click', function(){
    output.textContent += '/';
})

multiply.addEventListener('click', function(){
    output.textContent += '*';
})

equal.addEventListener('click', function(){
    output.textContent = eval(output.textContent)
})