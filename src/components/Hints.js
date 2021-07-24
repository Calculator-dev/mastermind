import React from "react";

const Hints = ({ rowId, hints, prevHints, activeRow }) => {
    let allHints = [];
    let hintClass = '';
    const rowsId = +rowId.substr(4);
    for (let i = 0; i < hints.length; i++) {
        if (rowsId === activeRow) {
            hintClass = hints[i] === 2 ? 'exact' : (hints[i] === 1 ? 'partial' : '')
        } else {
            for (let j = 0; j < prevHints.length; j++) {
                if (rowsId === j) {
                    hintClass = prevHints[j][i] === 2 ? 'exact' : (prevHints[j][i] === 1 ? 'partial' : '')
                }
            }
        }
        allHints.push(
            <CheckBox
                hintClass={hintClass}
                key={'h_' + rowsId + i}
                id={'h_' + rowsId + i}
            />
        )
    }
    return (
        <div className="hints">
            {allHints}
        </div>
    )
}
const CheckBox = ({ hintClass, id }) => {
    return (
        <span
            className={hintClass}
            id={id}
        ></span>
    )
}
export default Hints;