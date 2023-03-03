import { React } from "react";
import DayDropdown from "./dayDropdown";

function Attraction({setItinerary, itinerary, place, places, setPlaces}) {    
    
    const placeProps = place.properties;

    return (
        <li className="text-left list-none bg-slate-200 rounded-md pt-1 pb-3 px-2">
            <div className="ml-1">
                <h2 className="text-lg font-semibold leading-6 mb-1">{placeProps.name}</h2>
                <p className="text-sm">{placeProps.address_line2}</p>
            </div>
            <DayDropdown place={placeProps} places={places} setPlaces={setPlaces} itinerary={itinerary} setItinerary={setItinerary} />
        </li>        
    )
}

export default Attraction;