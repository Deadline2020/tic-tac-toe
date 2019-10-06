class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = true;
    this.grid = [null, null, null, null, null, null, null, null, null];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol ? "x" : "o";
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.grid[3 * columnIndex + rowIndex]) {
      this.grid[3 * columnIndex + rowIndex] = this.currentPlayerSymbol ? "x" : "o";
      this.currentPlayerSymbol = !this.currentPlayerSymbol;
    }
  }

  isFinished() {
    if (this.isDraw() || this.getWinner()) return true;
    return false;
  }

  getWinner() {
    const winComb = [[6, 7, 8], [3, 4, 5], [0, 1, 2], [6, 3, 0], [7, 4, 1], [8, 5, 2], [6, 4, 2], [8, 4, 0]];
    for (let comb of winComb) {
      if (this.grid[comb[0]] === this.grid[comb[1]] && this.grid[comb[1]] === this.grid[comb[2]]) {
        return this.grid[comb[0]];
      }
    }
    return null;
  }

  noMoreTurns() {
    if (~this.grid.indexOf(null)) return false;
    return true;
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) return true;
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.grid[3 * colIndex + rowIndex];
  }
}

module.exports = TicTacToe;
