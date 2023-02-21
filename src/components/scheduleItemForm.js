import { React, useState } from "react";

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
            <label>Add an activity
                <input
                    type="text"
                    value={userItem}
                    onChange={(e) => setUserItem(e.target.value)}
                />
            </label>
        </form>
    )
}

export default ScheduleItemForm;