import { React, useState, useEffect } from "react";
import Search from "./Search";
import { createClient } from 'pexels';

function WhereTo(props) {

    const [backgoundImage, setBackgoundImage] = useState("");
    const API_KEY = "OVJEDExfeypBb1DqjkyDd3falp08tv5aCtvxRYFvMuuWxbv2DN8xSmyM";
    const client = createClient(API_KEY);
    
    useEffect(() => {
        client.photos.show({ id: 33622 })
            .then(photo => {
                console.log("photo", photo);
                setBackgoundImage(photo.src.large2x);
            });
      }, [client]);

    return (
        <div className="w-screen flex justify-center justify-items-center">
            <img className="absolute w-full" src={backgoundImage} alt="Evocative holiday scene"></img>            
            <div className="max-w-[430px] w-full m-3 mt-3 pt-5 pb-5 z-10 bg-white">
                <h1 className="relative font-extrabold text-[60px]">Where to?</h1>
                <Search setDestination={props.setDestination}/>
            </div>
        </div>
    );
}

export default WhereTo;