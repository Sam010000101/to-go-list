import React from "react";
import ScheduleItemForm from "./scheduleItemForm";

function Schedule(props) {
    
    const {itinerary, setItinerary} = props;
    // Array to store prepared jsx for each day
    const daysOut = [];

    // Iterate itnerary and build list of activities for each day
    const days = itinerary.map((day, i) => {
        // Build list of activities for current day
        let liItems = [];
        // Optimise for loop condition
        const numActivities = day.length;
        let j = 0; 

        if (numActivities) {
            // If current day has been assigned activities, add them to the list
            for (j; j < numActivities; j++) {
                liItems.push(<li key={`activity${j}`} className="border-b border-slate-300 py-2">{day[j]}</li>);
            }
        }
        liItems.push(<ScheduleItemForm key={`activity${j + 1}`} day={i} itinerary={itinerary} setItinerary={setItinerary} />);
        
        daysOut.push(
            // Prepare jsx for entire day listing and store in daysOut array
            <li className="flex pb-2" key={`day${i + 1}`} >
                <div className="w-full">
                    <span className="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
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

    return (

        <div id="schedule" className="flex flex-col justify-center rounded-xl h-auto bg-white w-full container mx-auto pb-5">

            {/* Module Header */}
            <span className="flex h-12 pt-3 gap-2 flex justify-center mx-1 mt-2 before:block before:absolute before:-inset-1 before:bg-indigo-900 relative inline-block before:rounded-t-xl before:rounded-b">
                <span className="relative text-blue-200 font-bold leading-6">ACTIVITY SCHEDULE</span>
                <span className="absolute inset-y-0 flex flex-col pl-2 pt-1 relative">
                    <svg className="h-5 w-5 pb-1 fill-slate-300" viewBox="0 0 31.982 31.982">	<path d="M3.952,23.15L0,31.955l8.767-3.992l0.018,0.019L3.938,23.13L3.952,23.15z M4.602,22.463L24.634,2.432l4.849,4.848 L9.45,27.312L4.602,22.463z M30.883,0.941c-2.104-1.963-4.488-0.156-4.488-0.156l4.851,4.843 C31.244,5.627,33.124,3.375,30.883,0.941z" /></svg>
                </span>
            </span>

            {/* Schedule blocks */}
            <div className="container mx-auto pt-2 pb-5">
                {daysOut}
            </div>
        </div>
    );
}

export default Schedule;