import {useState} from 'react';
import Board from './Board';
import { calculateWinner } from '../Helper';

const styles = {
    width: '200px',
    margin: '20px auto'
};
const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, finishLineClass] = calculateWinner(board);

    console.log(board)
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
                <h2>
                    {winner ? `Winner: ${winner}` : 'Next player: ' + (xIsNext ? 'X' : 'O')}
                </h2>
                {winner && <button className={'restart-button'} onClick={restart}> restart </button>}
            </div>
        </>
    )
};

export default Game;
