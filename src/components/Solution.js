import React from "react";

const Solution = ({ defeat, victory, WinnerRow, newGame }) => {

    let solutionPegs = [];
    let solutionClass = "";
    const isHidden = (defeat && !victory) ? "" : "hidden";
    const playAgain = (!defeat && victory) ? "" : "hidden";
    for (let i = 0; i < WinnerRow.length; i++) {
        solutionClass = WinnerRow[i]
        solutionPegs.push(
            <div className={"color-holder " + solutionClass} key={"s_" + i}>

            </div>
        )
    }

    return (
        <div className="solution colors">
            <div className={isHidden}>
                <h2>Solution: </h2>
                {solutionPegs}
                <br />
                <button className="playAgainButton" onClick={newGame}>
                    Play Again?
                </button>
            </div>
            <div className={playAgain}>
                <button className="playAgainButton" onClick={newGame}>
                    Play Again?
                </button>
            </div>

        </div>
    )
}

export default Solution;