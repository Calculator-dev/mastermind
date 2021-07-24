import React from "react";
import Circle from "./Circle";
import CheckButton from "./CheckButton";
import Hints from "./Hints";

const Row = ({ prevRow, checkRow, check, setColor, activeColor, currentRow, id, activeRow, hints, prevHints }) => {

    let active = "";
    if (+id.substr(4) === activeRow) {
        active = "active"
    }

    return (
        <div className={"row " + active} id={id}>
            <Circle
                setColor={setColor}
                rowId={id}
                prevRow={prevRow}
                currentRow={currentRow}
                activeColor={activeColor}
                activeRow={activeRow}
            />
            <CheckButton
                rowId={id}
                activeRow={activeRow}
                check={check}
                checkRow={checkRow}
            />
            <Hints
                rowId={id}
                hints={hints}
                prevHints={prevHints}
                activeRow={activeRow}
            />
        </div>
    )
}

export default Row;