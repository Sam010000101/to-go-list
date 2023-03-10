import {React, useEffect, useRef } from "react";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/round-borders.css";

function Form({ setDestination }) {

    const API_KEY = "33b4af2cef534bd6b626019b07159028";
    const initialised = useRef(false);

    useEffect(() => {

        /*  
         *  From React 18, useEffect runs twice in development environment - 
         *  Could prevent this by disabling Strict mode in src/index.js, but 
         *  preferring use of "initialised" conditional so development-only
         *  checks are still performed in Strict mode
        */   

        if(!initialised.current) { const autocomplete = new GeocoderAutocomplete(
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
            
            initialised.current = true;
        }
    }, [setDestination]);
      
    return (
        <div className="w-full flex justify-center bg-slate-400">
            <div id="autocomplete" className="absolute top-[90px] w-full max-w-[400px] autocomplete-container"></div>
        </div>
    );
}

export default Form;