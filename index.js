let arrList = {
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    7:'',
    8:'',
    9:''
};
let chance = 'X';
let boxes = document.querySelectorAll('.box');
let chance_box = document.querySelector('#chance');
let win_box = document.querySelector('.win-box');
let winner = document.querySelector('#winner');

boxes.forEach((box,ind) => {
    box.addEventListener('click',(e) => {
        let choice = e.target.getAttribute('data-value');
        if(box.innerHTML == '') {
            if(chance == 'X') {
                box.innerHTML = 'X';
                arrList[choice] = 'X';
                chance = 'O';
            } else {
                box.innerHTML = 'O';
                arrList[choice] = 'O';
                chance = 'X';
            };
            chance_box.innerHTML = chance;
        };
        if((arrList[1]=='X'&&arrList[2]=='X'&&arrList[3]=='X') || (arrList[4]=='X'&&arrList[5]=='X'&&arrList[6]=='X') || (arrList[7]=='X'&&arrList[8]=='X'&&arrList[9]=='X') || (arrList[1]=='X'&&arrList[4]=='X'&&arrList[7]=='X') || (arrList[2]=='X'&&arrList[5]=='X'&&arrList[8]=='X') || (arrList[3]=='X'&&arrList[6]=='X'&&arrList[9]=='X') || (arrList[1]=='X'&&arrList[5]=='X'&&arrList[9]=='X') || (arrList[3]=='X'&&arrList[5]=='X'&&arrList[7]=='X')) {
            win_box.style.display = 'flex';
            winner.innerHTML = 'X';
        }
        else if((arrList[1]=='O'&&arrList[2]=='O'&&arrList[3]=='O') || (arrList[4]=='O'&&arrList[5]=='O'&&arrList[6]=='O') || (arrList[7]=='O'&&arrList[8]=='O'&&arrList[9]=='O') || (arrList[1]=='O'&&arrList[4]=='O'&&arrList[7]=='O') || (arrList[2]=='O'&&arrList[5]=='O'&&arrList[8]=='O') || (arrList[3]=='O'&&arrList[6]=='O'&&arrList[9]=='O') || (arrList[1]=='O'&&arrList[5]=='O'&&arrList[9]=='O') || (arrList[3]=='O'&&arrList[5]=='O'&&arrList[7]=='O')) {
            win_box.style.display = 'flex';
            winner.innerHTML = 'O';
        }
    });
});