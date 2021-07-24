import React from "react";

const Colors = ({ list, activeColor, action }) => {

    const allColors = list.map((color) => {
        const active = color === activeColor ? "active" : "";

        return (
            <div
                className={"color-holder " + color + " " + active}
                key={color}
                onClick={() => action(color)}>

            </div>
        )
    })

    return (
        <div className="colors">
            {allColors}
        </div>
    )

}

export default Colors;