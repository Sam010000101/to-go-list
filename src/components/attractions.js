import { React, useState, useEffect } from "react";
import GeoapifyAPI from "./utils/APIs/GeoapifyAPI";
import Attraction from "./attraction";

function Attractions(props) {

    const destinationData = props.destinationData;
    const [errorMessage, setErrorMessage] = useState("");
    const {places, setPlaces, itinerary, setItinerary} = props;

    useEffect(() => {
        // Make sure we've got a place_id to search for
        if (Object.hasOwn(destinationData.properties, "place_id")) {
            GeoapifyAPI.searchTerms(destinationData.properties.place_id)
                .then(res => {
                    if (typeof res.data === "undefined" || !res.data.features.length) {
                        // Disabled for purposes of MVP 
                        // throw new Error("No results found.");
                    }
                    if (res.status !== 200) {
                        throw new Error(res.statusText);
                    }
                    // Update places state
                    setPlaces(res.data.features);
                })
                .catch(err => setErrorMessage(err.message));
        }

    }, [destinationData, setPlaces, setErrorMessage]);

    return (
        <div id="attractions" className="rounded-xl container mx-auto">
            <p id="error">{errorMessage}</p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                places
                    .filter(place => {
                        // Exclude attractions that have already been added to itinerary
                        return !place.properties.activityId})
                    .map(place => <Attraction key={place.properties.place_id} place={place} places={places} setPlaces={setPlaces} itinerary={itinerary} setItinerary={setItinerary} />)
            }
            </ul>

        </div>
    )
}

export default Attractions;