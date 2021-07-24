import React, { useState } from "react";
import Board from "./Board";
import Rules from "./Rules";
import Colors from "./Colors"
import Solution from "./Solution";

const winner = ["blue", "yellow", "green", "red", "brown", "purple"];
const WinnerRow = []
for (let j = 0; j < 4; j++) {
    WinnerRow.push(winner[Math.floor(Math.random() * 4)])
}
console.log(WinnerRow)

const Game = () => {

    const [prevRow, setPrevRow] = useState([]);
    const [prevHints, setPrevHints] = useState([]);
    const [currentRow, setCurrentRow] = useState(["", "", "", ""]);
    const [activeColor, setActiveColor] = useState("");
    const [activeRow, setActiveRow] = useState(0);
    const [check, setCheck] = useState(false);
    const [victory, setVictory] = useState(false);
    const [defeat, setDefeat] = useState(false);
    const [hints, setHints] = useState([0, 0, 0, 0]);
    const activateColor = (prop) => {
        setActiveColor(prop);
    }



    const setColor = (color, id) => {
        if (victory) {
            return false
        }
        const rowId = +id.substr(1, id.indexOf("_") - 1);
        const pegId = +id.substr(id.indexOf("_") + 1);
        let isArrayFull = 0;

        if (activeRow === rowId && color) {
            currentRow[pegId] = color;
            setCurrentRow([...currentRow])
        }

        for (let i in currentRow) {
            if (currentRow[i].length > 0) {
                isArrayFull++;
            }
        }

        if (isArrayFull === currentRow.length) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    const checkRow = () => {
        const presentRow = JSON.parse(JSON.stringify(currentRow));
        const correctRow = JSON.parse(JSON.stringify(WinnerRow));
        for (let i = 0; i < 4; i++) {
            if (presentRow[i] === correctRow[i]) {
                hints[i] = 2;
                delete (presentRow[i]);
                delete (correctRow[i])
            }
        }
        for (let i in presentRow) {
            for (let j in correctRow) {
                if (presentRow[i] === correctRow[j]) {
                    hints[i] = 1;
                    delete (presentRow[i]);
                    delete (correctRow[j])
                }
            }
        }
        hints.sort((a, b) => (b - a));
        if (hints[0] === 2 && hints[1] === 2 && hints[2] === 2 && hints[3] === 2) {
            return setVictory(true);
        }
        if (activeRow >= 10 - 1 && !victory) {
            return setDefeat(true);
        }
        prevHints.push(hints);
        prevRow.push(currentRow);
        setHints([0, 0, 0, 0]);
        setActiveRow(activeRow + 1);
        setPrevHints(prevHints);
        setCurrentRow(['', '', '', '']);
        setPrevRow(prevRow);
        setCheck(false);
        setVictory(victory);
        setDefeat(defeat);
    }

    const newGame = () => {
        window.location.reload();
    }

    let msg = victory ? 'You Win !' : (defeat ? 'You Lost !' : '');

    return (
        <div className="game-container" >
            <h1>Mastermind</h1>
            <Rules />
            <Colors
                list={winner}
                activeColor={activeColor}
                action={activateColor}
            />
            <Board
                WinnerRow={WinnerRow}
                check={check}
                setColor={setColor}
                checkRow={checkRow}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
                activeRow={activeRow}
                setActiveRow={setActiveRow}
                currentRow={currentRow}
                hints={hints}
                prevRow={prevRow}
                prevHints={prevHints}
            />
            <p className="msg">{msg}</p>
            <Solution
                newGame={newGame}
                defeat={defeat}
                victory={victory}
                WinnerRow={WinnerRow}
            />
        </div>
    )
}

export default Game;