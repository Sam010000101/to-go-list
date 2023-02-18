import { React } from "react";

function Attraction(props) {
    
    const place = props.properties;

    return (
        <li className="text-left list-none bg-slate-200 rounded-md py-1 px-2">
            <h2 className="text-lg font-semibold leading-6 mb-1"><button onClick={() => {console.log("clicked");}} className="text-sm drop-shadow-sm">✅</button> {place.name}</h2>
            <p className="text-sm">{place.address_line2}</p>
            
        </li>        
    )
}

export default Attraction;