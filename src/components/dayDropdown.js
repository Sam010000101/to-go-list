import React from "react";
import { Menu } from "@headlessui/react";

function DayDropdown(props) {

  const {place, places, setPlaces, itinerary, setItinerary} = props;
  const {formatted, place_id} = place;
  const days = [];
  
  for (let i = 0; i < 7; i++) {
    days.push(
      <Menu.Item key={i} >
          {({ active }) => (
          <button onClick={(e) => {
            let errs = [];
            const numStr = e.target.textContent;
            if (numStr.length) {
              
              setItinerary(() => {
                // Replace entire state to execute useEffect with itinerary as dep
                const itineraryUpdate = [...itinerary];
                itineraryUpdate[i].push(formatted);
                return itineraryUpdate;
              });

              const placesUpdate = [...places];
              placesUpdate
                .filter(place => {
                  // Get the attraction we've just added
                  return place_id === place.properties.place_id;
                })
                .map(place => {
                  // Mark as selected so we can exclude from Attractions listing
                  return place.properties.selected = true});
              // Update places state
              setPlaces(placesUpdate);
            } else {
              errs.push("Unable to read day number");
            }
            console.log(...errs);
          }} id={i} className={`mx-1 px-2 py-1 text-sm text-blue-500 rounded-sm bg-white hover:bg-blue-100 ${active && 'bg-blue-500'}`}>{i + 1}</button>
          )}
        </Menu.Item>
    );            
  }

  return (
    <Menu>
      <Menu.Button className="group mx-1 mt-3 mr-1"><span className="px-2 pt-1 pb-2 text-lg text-white font-itim lowercase rounded-sm bg-blue-500 hover:bg-blue-600">Go</span><span className="hidden group-aria-expanded:inline text-blue-600"> on day </span></Menu.Button>
      <Menu.Items>
        <div className="bg-blue-500 px-1 py-2 ml-1 rounded-b-sm w-auto inline-block">
          {days}
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default DayDropdown;