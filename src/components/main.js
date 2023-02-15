import React from "react";
import Currency from "./currency";
import Weather from "./weather";
import Translator from "./translator";
import Tips from "./tips";

function Main() {
    return (
        <div className="container grid gap-4 grid-cols-1 md:grid-cols-2">
            <Currency />
            <Weather />
            <Translator />
            <Tips />
        </div>
    )
}

export default Main;