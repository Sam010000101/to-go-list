import {React, useEffect} from "react";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/round-borders.css";
import "./style.css";

const API_KEY = "33b4af2cef534bd6b626019b07159028";
let initialised = false;

function Form(props) {

    const setDestination = props.setDestination;

    useEffect(() => {

        /*  
         *  From React 18, useEffect runs twice in development environment - 
         *  Could prevent this by disabling Strict mode in src/index.js, but 
         *  preferring use of "initialised" conditional so development-only
         *  checks are still performed in Strict mode
        */                
        if(!initialised) { const autocomplete = new GeocoderAutocomplete(
                document.getElementById("autocomplete"), 
                API_KEY, 
                {
                    placeholder: "Make it somewhere nice...",
                    debounceDelay: 150
                });

            autocomplete.on("select", (destination) => {
                // Update destination 
                setDestination(destination);
            });

            autocomplete.on("suggestions", (suggestions) => {
            // process suggestions here
            });
            initialised = true;
        }
    }, [setDestination]);
      
    return (
        <div className="rounded-xl container mx-auto h-36 bg-slate-400">
            <div id="autocomplete" className="relative mt-5 w-full autocomplete-container"></div>
        </div>
    );
}

export default Form;