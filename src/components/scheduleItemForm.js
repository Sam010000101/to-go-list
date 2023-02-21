import { React, useState } from "react";
import { HiPlusCircle } from 'react-icons/hi';

function ScheduleItemForm(props) {

    const { day, itinerary, setItinerary } = props;
    const [userItem, setUserItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setItinerary(() => {
            // Replace entire state to execute useEffect with itinerary as dep
            const itineraryUpdate = [...itinerary];
            itineraryUpdate[day].push(userItem);
            setUserItem("");
            return itineraryUpdate;
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="block mt-3"><HiPlusCircle size="20px" className="inline -mt-1 text-blue-500 hover:text-blue-600"/> Add an activity
                <input className="block w-full text-center"
                    type="text"
                    value={userItem}
                    onChange={(e) => setUserItem(e.target.value)}
                />
            </label>
        </form>
    )
}

export default ScheduleItemForm;