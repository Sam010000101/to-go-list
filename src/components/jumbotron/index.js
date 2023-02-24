import { React, useEffect } from "react";
import PixabayAPI from "../utils/APIs/PixabayAPI";
import Form from "../travel-form";
import "./style.css";

function Jumbotron(props) {

    const destinationName = props.destinationName;
    const backgroundImage = props.backgroundImage;
    const setBackgroundImage = props.setBackgroundImage;
    const setDestination = props.setDestination;

    useEffect(() => {
        PixabayAPI.searchTerms(destinationName)
            .then(resp => {
                if (resp.data.hits.length) {
                    setBackgroundImage(resp.data.hits[0].largeImageURL);
                }
            });
}, [setBackgroundImage, destinationName]);


    return (
        <div id="jumbotron" className="relative rounded-xl container mx-auto h-72 bg-slate-400 overflow-hidden">
            <h1 className="absolute w-full font-itim text-[60px] text-white z-40">Where to?</h1>      
            <div className="min-h-[300px] opacity-50 z-0 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}} alt="Evocative holiday scene"></div>
            <Form setDestination={setDestination}/>
        </div>
    )
}

export default Jumbotron;