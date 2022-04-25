import React, { useState } from "react";
import Board from "./Board.js";
import Game from "./Game.js";
import Player from "./Player.js";
import "../../Style/Tictactoe.css";

const Tictactoe = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const current = history[stepNumber];
    return (
        <div className='home'>
            <div className='column left'>
                <Player name={"Aubrhey"} winrate={"90%"} matches={"10"} />
                <Player name={"Jobert"} winrate={"10%"} matches={"10"} />
            </div>
            <div className='column middle'>
                <div className='game content'>
                    <div className='game-board'>
                        <Board
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className='game-info'>
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
            <div className='column right'></div>
        </div>
    );
};

export default Tictactoe;
