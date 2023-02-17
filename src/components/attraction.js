import { React } from "react";

function Attraction(props) {
    
    const place = props.properties;

    return (
        <li className="text-left list-none bg-slate-100 rounded-md py-1 px-2">
            <h2 className="text-lg font-semibold leading-6 mb-1">{place.name}</h2>
            <p className="text-sm">{place.address_line2}</p>
            <button onClick={() => {console.log("clicked");}} className="text-sm text-slate-50 bg-green-700 rounded-md py-1 px-2 my-2">Add</button>
        </li>        
    )
}

export default Attraction;