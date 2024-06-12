import { Winner_Combos } from "../constants";

export const checkWinner = (boardToCheck) => {
  for (const combo of Winner_Combos) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

// revisamos si hay un empate si no hay más espacios vacíos en el tablero
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
