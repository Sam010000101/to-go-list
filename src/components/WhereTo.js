import {React, useEffect} from "react";
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const API_KEY = "33b4af2cef534bd6b626019b07159028";
let initialised = false;

function WhereTo() {

    useEffect(() => {

        /*  
         *  From React 18, useEffect runs twice in development environment - 
         *  Could prevent this by disabling Strict mode in src/index.js, but 
         *  preferring use of "initialised" conditional so we keep the development-only
         *  checks performed in Strict mode
        */                

        if(!initialised) { const autocomplete = new GeocoderAutocomplete(
                document.getElementById("autocomplete"), 
                API_KEY, 
                {
                    type: "city",
                    placeholder: "Make it somewhere nice...",
                    debounceDelay: 250
                });

            autocomplete.on('select', (location) => {
            // check selected location here 
            });

            autocomplete.on('suggestions', (suggestions) => {
            // process suggestions here
            });
            initialised = true;
        }
    }, []);
      
    return (
        <div id="autocomplete" className="relative autocomplete-container"></div>
    );
}

export default WhereTo;