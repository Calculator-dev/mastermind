import React, { useState, link } from "react";

const Rules = () => {

    const [rules, setRules] = useState(false);
    const [showRules, setShowRules] = useState(false);

    const ChangeRules = (e) => {
        e.preventDefault();
        if (rules) {
            setRules(false);
        } else {
            setRules(true);
        }
    }

    const ShowToggle = () => {
        setShowRules(showRules => !showRules);
    }

    return (
        <div>
            <button onClick={(e) => { ChangeRules(e); ShowToggle(); }} className="rules-button">{rules ? "Hide Rules" : "Show Rules"}</button>
            {showRules && <p className="game-rules">
                Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a small green squared is show for each circle in a correct position and color. A yellow square indicates the existence of a correct color in an incorrect position.
                More info on <a href={link}>Wikipedia</a>.
            </p>}
        </div>
    )
}

export default Rules;