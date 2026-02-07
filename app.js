let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let gameActive = true;

// 2d array
const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "" || !gameActive) return;
        
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if (val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1);
            gameActive = false;
            return;
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Player ${winner} Won!`;
    msgcontainer.classList.remove("hide");
    disableAllBoxes();
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const resetGame = () => {
    turn0 = true;
    gameActive = true;
    msgcontainer.classList.add("hide");
    enableAllBoxes();
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);