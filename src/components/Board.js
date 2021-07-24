import React from "react";
import Row from "./Row";

const Board = ({ prevRow, checkRow, check, setColor, currentRow, activeColor, setActiveColor, activeRow, hints, prevHints }) => {

    const Rows = [];
    for (let i = 0; i < 10; i++) {
        Rows.push(
            <Row
                key={"row_" + i}
                id={"row_" + i}
                checkRow={checkRow}
                check={check}
                setColor={setColor}
                hints={hints}
                prevHints={prevHints}
                currentRow={currentRow}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
                activeRow={activeRow}
                prevRow={prevRow}
            />)
    }

    return (
        <div className="board">
            {Rows}
        </div>
    )
}

export default Board;