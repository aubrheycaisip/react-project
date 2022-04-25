import React, { useState } from "react";

function History() {
    const sample = [{ squares: Array(9).fill(null) }, { squares: ["hello"] }];
    // const [history, setHistory] = useState([{ id: 1, squares: "a" }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    // setHistory((history) => [...history, sample]);
    // console.log(sample);
    // console.log(history);
    console.log(sample.slice(0, 2));
    return (
        <div className='home'>
            <div className='column middle'>
                <div className='content'>{sample.slice(0, 0)}</div>
                <div className='content'>{stepNumber}</div>
            </div>
        </div>
    );
}

export default History;
