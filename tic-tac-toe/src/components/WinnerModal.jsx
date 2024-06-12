import { Square } from "./square";


export function WinnerModal(winner, resetGame) {
  if (winner !== null) return null;

  const wiinerText = winner === false ? "Empate" : "Ganó:" 

  return (
    <section className="winner">
      <div>
        <h2 className="text">{wiinerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
