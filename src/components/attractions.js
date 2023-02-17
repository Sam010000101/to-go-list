import { React, useState, useEffect } from "react";
import GeoapifyAPI from "./utils/APIs/GeoapifyAPI";
import Attraction from "./attraction";

function Attractions(props) {

    const destinationData = props.destinationData;
    const [errorMessage, setErrorMessage] = useState("");
    const places = props.places;
    const setPlaces = props.setPlaces;

    useEffect(() => {
        console.log("errorMessage", errorMessage);
        // Is it performing a search after the field has been cleared?
        if (Object.hasOwn(destinationData.properties, "place_id")) {
            GeoapifyAPI.searchTerms(destinationData.properties.place_id)
                .then(res => {
                    if (typeof res.data === "undefined" || !res.data.features.length) {
                        // throw new Error("No results found.");
                    }
                    if (res.status !== 200) {
                        throw new Error(res.statusText);
                    }
                    setPlaces(res.data.features);
                })
                .catch(err => setErrorMessage(err.message));
        }

    }, [destinationData, setPlaces]);

    return (
        <div id="attractions" className="rounded-xl container mx-auto bg-slate-400">
            <h1>Attractions</h1>
            <p id="error">{errorMessage}</p>
            <ul className="grid gap-4 grid-cols-2 p-3">
            {
                places.map(place => <Attraction key={place.properties.place_id} {...place} />)
            }
            </ul>

        </div>
    )
}

export default Attractions;