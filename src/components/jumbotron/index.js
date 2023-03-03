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
        <div id="jumbotron" className="relative top-0 w-full h-screen bg-slate-400 overflow-hidden">
            <div className="absolute top-36 w-full">
                <h1 className="font-itim text-[60px] text-white text-center z-40">Where to?</h1>
                <Form setDestination={setDestination}/>
            </div>
            <div className="w-full h-screen bg-center bg-cover bg-[#025]" style={{backgroundImage: `linear-gradient(to top, transparent 40vh, #025), url(${backgroundImage})`}} id="main-image" alt="Evocative holiday scene"></div>
        </div>
    )
}

export default Jumbotron;