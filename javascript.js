const container = document.querySelector('#container');

let color = 'background: blue'
for (let i = 1; i < 257; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new');                                      
    container.append(newDiv);
    newDiv.addEventListener('mouseover', () => {
        newDiv.setAttribute('style', color);    
    });
}

/*
let answer;
const btn = document.querySelector('#button');
btn.addEventListener('click', () => {
    answer = prompt("Please enter", "16");
    clearScreen();
    for (let i = 1; i < answer * answer; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(answer);
        container.append(newDiv);
        newDiv.addEventListener('mouseover', () => {
            newDiv.setAttribute('style', 'background: blue;');    
        });
    }
});
*/

let answer = 16;
const btn = document.querySelector('#button');
btn.addEventListener('click', () => {
    answer = parseInt(prompt("Please enter", "16"));
    if(isNaN(answer) || answer <= 0 || answer > 64) {
      alert('Invalid input. Please enter a number from 1 to 64');
      return;
    }
    clearScreen();
    for (let i = 1; i <= answer ** 2; i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('new');                                      
        newDiv.addEventListener('mouseover', () => {
            newDiv.setAttribute('style', color);    
        });
    }
    container.style.gridTemplateColumns = `repeat(${answer}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${answer}, 1fr)`;
    //container.style.borderColor = 'red';
    // same thing
    document.querySelector("#container").style.borderColor = 'red';
});

function clearScreen() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    clearScreen();
    for (let i = 1; i <= answer ** 2; i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('new');                                      
        newDiv.addEventListener('mouseover', () => {
            newDiv.setAttribute('style', color);    
        });
    }
    container.style.gridTemplateColumns = `repeat(${answer}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${answer}, 1fr)`;
})

const change = document.querySelector('#change');
change.addEventListener('click', () => {
    changeColor();
})

/*
let colorIndex = 0;
const colors = ['background: blue', 'background: green', 'background: red']
function changeColor() {
    colorIndex = (colorIndex + 1) % 3;
    color = colors[colorIndex];
}
*/

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    color = `background: ${getRandomColor()}`;
}