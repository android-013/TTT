document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let board = Array(9).fill(null);
    
    const checkWinner = () => {
        const winningCombinations = [
            [1, 2, 3], [1, 4, 7], [1, 5, 9], 
            [4, 5, 6], [2, 5, 8], [3, 5, 7],
            [7, 8, 9], [3, 6, 9]
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
