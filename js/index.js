// 1
const headerImg = document.querySelector('header img');
headerImg.addEventListener('mouseover', obj=>{
    obj.target.style.opacity = '0.3';
});

// 2
headerImg.addEventListener('mouseout', obj=>{
    obj.target.style.opacity = '1.0';
});

// 3
/*window.addEventListener('load', obj=>{
    alert('Web page is done loading!');
})*/

// 4 
const h1 = document.querySelector('h1');
window.addEventListener('resize', obj=>{
    h1.textContent = 'You resized the page';
});

// 5
const imgContImg = document.querySelector('.img-content img');
imgContImg.addEventListener('dblclick', obj=>{
    obj.target.style.transform = 'scale(1.3)';
});

// 6 
const textBox = document.createElement('textarea');
const contentDest = document.querySelector('.content-destination');
contentDest.prepend(textBox);
textBox.style.margin = '3% 0';
textBox.type = 'text';
textBox.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
textBox.style.height = '150px';
textBox.style.width = '150px';
textBox.addEventListener('focus', obj=>{
    obj.target.style.backgroundColor = 'green';
});

// 7
textBox.addEventListener('focusout', obj=>{
    obj.target.style.backgroundColor = 'white';
});

// 8 
const newP = document.createElement('p');
contentDest.prepend(newP);
let scrolled = 0;
document.addEventListener('scroll', obj=>{
    scrolled++;
    newP.textContent = `You've scrolled ${scrolled} times`;
});

// 9 
const newP2 = document.createElement('p');
contentDest.prepend(newP2);
textBox.addEventListener('select', obj=>{
    const selection = obj.target.value.substring(obj.target.selectionStart, obj.target.selectionEnd);
    newP2.textContent = `You selected- "${selection}"`;
});

// 10
const body = document.querySelector('body');
let count = 0;
window.addEventListener('contextmenu', obj=>{
    count++;
    if (count % 2 != 0) {
    body.style.backgroundColor = 'lightGrey';
    } else {
        body.style.backgroundColor = 'white';
    }
});

/* PREVENTING EVENT PROPAGATION */

const contPick = document.querySelector('.content-pick div.destination:first-of-type');
contPick.addEventListener('click', obj=>{
    contPick.style.backgroundColor = 'yellow';
})

const button = document.querySelector('.content-pick div.destination:first-of-type .btn');
button.addEventListener('click', obj=>{
    obj.target.style.backgroundColor = 'red';
    obj.stopPropagation();
});

/* PREVENT DEFAULT */

const navs = document.querySelectorAll('a');
navs.forEach(item=>{
    item.addEventListener('click', obj=>{
        obj.preventDefault;
    })
});
