const cells = document.querySelectorAll('.cell');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = 'X';
let gameEnd = false;

cells.forEach(cell => {
    cell.addEventListener('click', cellClickHandler);
});

function cellClickHandler() {
    if (gameEnd || this.textContent !== '') return;

    this.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
        document.getElementById('winning-message').textContent = currentPlayer + ' wins!';
        gameEnd = true;
        return;
    }
    if (checkDraw()) {
        document.getElementById('winning-message').textContent = 'It\'s a draw!';
        gameEnd = true;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    document.getElementById('winning-message').textContent = '';
    gameEnd = false;
    currentPlayer = 'X';
}
