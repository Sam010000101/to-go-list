import React from "react";
import ScheduleItemForm from "./scheduleItemForm";
import { HiMinusCircle } from 'react-icons/hi';

function Schedule(props) {

    const { itinerary, setItinerary } = props;

    const removeItem = (dayIndex, activity_id) => {

        setItinerary(prev => {
            // Replace entire state to execute useEffect with itinerary as dep
            const updatedDay = prev[dayIndex].filter(activity => {
                return activity.id !== activity_id
            });
            const itineraryUpdate = [
                ...prev
            ];
            itineraryUpdate[dayIndex] = updatedDay;
            return itineraryUpdate;
        });
    }

    const getDaysOut = () => {

        // Iterate itinerary and build list of activities for each day
        const daysOut = [];

        itinerary.forEach((day, i) => {
            // Build list of activities for current day
            let liItems = [];
            // Optimise for loop condition
            const numActivities = day.length;
            let j = 0;

            if (numActivities) {
                // If current day has been assigned activities, add them to the list
                for (j; j < numActivities; j++) {
                    // console.log("array position will be", j - 1);
                    const activity_id = day[j].id;
                    liItems.push(<li key={`activity${j}`} className="border-b border-slate-300 py-2">{day[j].text} <button onClick={() => { removeItem(i, activity_id) }}><HiMinusCircle size="20px" className="inline -mt-1 text-slate-400 hover:text-slate-500" /></button></li>);
                }
            }
            liItems.push(<li key={`activity${j + 1}`} className="pt-1"><ScheduleItemForm day={i} itinerary={itinerary} setItinerary={setItinerary} /></li>);
            daysOut.push(
                // Prepare jsx for entire day listing and store in daysOut array
                <li className="flex pb-2" key={`day${i + 1}`} >
                    <div className="w-full">
                        <span className="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative before:rounded-t-xl">
                            <span className="relative text-white uppercase text-left">day {i + 1}</span>
                        </span>
                        <label className="relative block">
                            <ul id="day-1-items" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none" placeholder="Activities for Day 1..." type="text" name="search" rows="3">
                                {liItems}
                            </ul>
                        </label>
                    </div>
                </li>
            );

        });

        return daysOut;
    }

    return (

        <div id="schedule" className="rounded-xl container mx-auto overflow-scroll">

            {/* Module Header */}
            <span className="pt-3 gap-2 flex justify-center mx-1 mt-2  bg-[#025] rounded-t-xl rounded-b h-12">
                <span className="font-itim relative text-blue-200 font-bold leading-6">Activity Schedule</span>
                <span className="inset-y-0 flex flex-col pl-2 pt-1 relative">
                    <svg className="h-5 w-5 pb-1 fill-slate-300" viewBox="0 0 31.982 31.982">	<path d="M3.952,23.15L0,31.955l8.767-3.992l0.018,0.019L3.938,23.13L3.952,23.15z M4.602,22.463L24.634,2.432l4.849,4.848 L9.45,27.312L4.602,22.463z M30.883,0.941c-2.104-1.963-4.488-0.156-4.488-0.156l4.851,4.843 C31.244,5.627,33.124,3.375,30.883,0.941z" /></svg>
                </span>
            </span>

            {/* Schedule blocks */}
            <div className="container mx-auto pt-2 pb-5">
                {getDaysOut()}
            </div>
        </div>
    );
}

export default Schedule;