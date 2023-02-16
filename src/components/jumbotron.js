import { React, useEffect } from "react";
import { createClient } from 'pexels';

function Jumbotron(props) {

    const API_KEY = "OVJEDExfeypBb1DqjkyDd3falp08tv5aCtvxRYFvMuuWxbv2DN8xSmyM";
    const client = createClient(API_KEY);
    const destinationName = props.destinationName;
    const backgroundImage = props.backgroundImage;
    const setBackgroundImage = props.setBackgroundImage;

    useEffect(() => {        
        client.photos.search({query: `${destinationName}`, orientation: "landscape", per_page: 1 })
            .then(resp => {
                setBackgroundImage(resp.photos[0].src.large2x);
            });
      }, [client, setBackgroundImage, destinationName]);


    return (
        <div id="jumbotron" className="relative rounded-xl container mx-auto h-72 bg-slate-400 overflow-hidden">
            <h1 className="absolute w-full font-extrabold text-[60px] text-black z-40">Where to?</h1>      
            <div className="min-h-[300px] opacity-50 z-0 bg-center" style={{backgroundImage: `url(${backgroundImage})`}} alt="Evocative holiday scene"></div>
        </div>
    )
}

export default Jumbotron;