import React from "react";
import Currency from "./currency";
import Weather from "./weather";


function Subsection() {
    return (
        <div className="container grid gap-4 grid-cols-1 md:grid-cols-2">
            <Currency />
            <Weather />
        </div>
    )
}

export default Subsection;