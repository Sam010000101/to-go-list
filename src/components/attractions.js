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
        <div id="attractions" className={Object.hasOwn(destinationData.properties, "lat") ? "group loaded rounded-xl container mx-auto overflow-scroll" : "group rounded-xl container mx-auto overflow-scroll"} >
              <span className="pt-3 gap-2 flex justify-center mx-1 mt-2  bg-[#025] rounded-t-xl rounded-b h-12">
                <span className="font-itim relative text-blue-200 font-bold leading-6">Places to Go</span>
            </span>
            <p id="error">{errorMessage}</p>

            <div className="block group-[.loaded]:hidden mt-2 xl:mt-5 text-slate-400 text-center px lg:px-24 xl:px-24 2xl:px-52">
                <p>Enter your destination in the search bar above and we'll suggest some places to go</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 pt-2 pb-5">
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