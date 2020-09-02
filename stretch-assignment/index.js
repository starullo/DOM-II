const blocksDiv = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

blocksDiv.style.display = 'flex';
blocksDiv.style.flexDirection = 'column';
red.style.order = '1';
blue.style.order = '2';
green.style.order = '3';
pink.style.order = '4';
gray.style.order = '5';


blocks.forEach(block=>{
    block.style.position = 'relative';
    block.style.left = '1px';
})
blocks.forEach(block=>{
    block.addEventListener('click', obj=>{
        if (obj.target.style.order != '1') {
        blocks.forEach(block=>{
            if (block.style.order < obj.target.style.order) {
                block.style.order += '1';
            }
        });
        obj.target.style.order = '1';
    };
    });
});




blocks.forEach(block=>{
    block.addEventListener('mousedown', obj=>{
        const int1 = setInterval(()=>{
            obj.target.style.left = (parseInt(obj.target.style.left) + 1) + 'px';
           }, 10);
           blocks.forEach(block=>{
            block.addEventListener('mouseup', obj=>{
                clearInterval(int1);
            })
           });
        });
    });