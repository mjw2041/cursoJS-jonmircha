const board = document.getElementById('board');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset-btn');

let cells = [];
let currentPlayer = 'X'; // 'X' para el jugador, 'O' para la máquina
let gameActive = true;
let boardState = [];

const winningConditions = [
    [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
];

function initializeGame() {
    board.innerHTML = '';
    cells = [];
    boardState = Array(25).fill(null);
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = `Es el turno de '${currentPlayer}'`;

    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
        cells.push(cell);
    }
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.dataset.index);

    if (boardState[clickedCellIndex] !== null || !gameActive || currentPlayer === 'O') {
        return; // No hacer nada si la celda está ocupada, el juego terminó o es el turno de la máquina
    }

    makeMove(clickedCellIndex, 'X');
    
    // Si el juego sigue activo después del movimiento del jugador, es el turno de la máquina
    if (gameActive) {
        setTimeout(computerMove, 500); // Pequeña pausa para que el movimiento sea visible
    }
}

function makeMove(index, player) {
    boardState[index] = player;
    cells[index].textContent = player;
    cells[index].classList.add(player);
    
    checkResult();
}

function computerMove() {
    // 1. Prioridad: Buscar una jugada ganadora para la máquina
    let bestMove = findWinningMove('O');
    if (bestMove !== -1) {
        makeMove(bestMove, 'O');
        return;
    }

    // 2. Prioridad: Bloquear la jugada ganadora del jugador
    bestMove = findWinningMove('X');
    if (bestMove !== -1) {
        makeMove(bestMove, 'O');
        return;
    }

    // 3. Prioridad: Tomar el centro si está disponible
    if (boardState[12] === null) {
        makeMove(12, 'O');
        return;
    }

    // 4. Prioridad: Tomar una esquina o un borde aleatorio
    const availableMoves = boardState.map((val, idx) => val === null ? idx : -1).filter(idx => idx !== -1);
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    makeMove(availableMoves[randomIndex], 'O');
}

function findWinningMove(player) {
    for (const condition of winningConditions) {
        let emptyIndex = -1;
        let playerCount = 0;
        
        for (const index of condition) {
            if (boardState[index] === player) {
                playerCount++;
            } else if (boardState[index] === null) {
                emptyIndex = index;
            }
        }
        
        // Si hay 4 del mismo jugador y un espacio vacío, esa es la jugada ganadora
        if (playerCount === 4 && emptyIndex !== -1) {
            return emptyIndex;
        }
    }
    return -1; // No se encontró una jugada ganadora
}

function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = boardState[winCondition[0]];
        const b = boardState[winCondition[1]];
        const c = boardState[winCondition[2]];
        const d = boardState[winCondition[3]];
        const e = boardState[winCondition[4]];

        if (a === null || b === null || c === null || d === null || e === null) {
            continue;
        }

        if (a === b && b === c && c === d && d === e) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `¡El jugador '${currentPlayer}' ha ganado! 🎉`;
        gameActive = false;
        return;
    }

    if (!boardState.includes(null)) {
        statusDisplay.textContent = '¡Empate! 🤝';
        gameActive = false;
        return;
    }

    // Cambia el turno solo si el juego no ha terminado
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Es el turno de '${currentPlayer}'`;
}

function handleResetGame() {
    initializeGame();
}

resetButton.addEventListener('click', handleResetGame);

initializeGame();