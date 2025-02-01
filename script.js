document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let board = Array(9).fill(null);
    
    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                alert(`${board[a]} wins!`);
                resetGame();
                return;
            }
        }
        
        if (!board.includes(null)) {
            alert("It's a draw!");
            resetGame();
        }
    };
    
    const handleClick = (event) => {
        const index = event.target.dataset.index;
        if (!board[index]) {
            board[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    };
    
    const resetGame = () => {
        board.fill(null);
        cells.forEach(cell => cell.textContent = "");
        currentPlayer = "X";
    };
    
    cells.forEach(cell => cell.addEventListener("click", handleClick));
    resetButton.addEventListener("click", resetGame);
});
