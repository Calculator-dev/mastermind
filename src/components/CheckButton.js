import React from "react";

const CheckButton = ({ rowId, activeRow, check, checkRow }) => {

    const row = +rowId.substr(4);
    let disabled = "disabled";
    const doNothing = () => (false);

    if (activeRow === row) {
        disabled = check ? "" : "disabled";
    }

    const checking = disabled === "disabled" ? doNothing : checkRow;

    return (
        <button className={"ok-button " + disabled} onClick={checking}>
            Check
        </button>
    )
}

export default CheckButton;