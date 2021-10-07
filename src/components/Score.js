const Score = ({ score, restartGame }) => {
    return (
        <div className="score">
            <p>Score</p>
            <p>Player 1: {score.X}</p>
            <p>Player 2: {score.O}</p>
            <button className="btn-try-again" onClick={restartGame}>Try again</button>
        </div>
    )
}

export default Score;