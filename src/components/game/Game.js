import {useState} from 'react';
import Board from '../board/Board';
import {calculateWinner} from "../../utils/calculateWinner/calculateWinner";

const styles = {
    width: '200px',
    margin: '20px auto'
};

const initialBoard = Array(9).fill(null)

const Game = () => {

    const [board, setBoard] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);
    // const [winner, finishLineClass] = calculateWinner(board);
    const  finishLineClass = "";
    const draw = board.indexOf(null) === -1 && !winner;


    const handleClick = (i) => {
        const symbol = xIsNext ? 'X' : 'O';
        setBoard(board.map((el, ind) => ind === i ? symbol : el))
        setXIsNext(!xIsNext);
    }

    const restart = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(true)
    }

    return (
        <>
            <Board
                squares={board}
                onClick={handleClick}
                finishLineClass={finishLineClass}
                winner={winner}
            />

            <div style={styles}>
                {!draw && <h2 data-testid={'game-info'}>
                    {winner ? `Winner: ${winner}` : 'Next player: ' + (xIsNext ? 'X' : 'O')}
                </h2>}
                <h3 data-testid={'draw'}>
                    {draw && `It's DRAW!`}
                </h3>
                {(winner || draw ) && <button className={'restart-button'} onClick={restart}> restart </button>}
            </div>
        </>
    )
};

export default Game;
