import React, { useState } from "react";

function Square(props) {
    const [counter, setCounter] = useState(0);
    return (
        <button className='square' onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

export default Square;
