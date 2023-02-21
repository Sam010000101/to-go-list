import { React, useState } from "react";
import { HiPlusCircle } from 'react-icons/hi';
import uniqid from 'uniqid';

function ScheduleItemForm(props) {

    const { day, itinerary, setItinerary } = props;
    const [userItem, setUserItem] = useState({text: "", id: ""});

    function handleSubmit(e) {
        e.preventDefault();

        setItinerary(() => {
            // Replace entire state to execute useEffect with itinerary as dep
            const itineraryUpdate = [...itinerary];
            itineraryUpdate[day].push(userItem);
            setUserItem({text: "", id: ""});
            return itineraryUpdate;
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="block mt-1"><HiPlusCircle size="20px" className="inline -mt-1 text-blue-500 hover:text-blue-700"/> Add an activity
                <input className="block w-full text-center h-1 focus:h-10"
                    type="text"
                    value={userItem.text}
                    onChange={(e) => setUserItem({
                        text: e.target.value,
                        id: uniqid()
                    })}
                />
            </label>
        </form>
    )
}

export default ScheduleItemForm;