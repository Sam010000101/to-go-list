import { React, useEffect, useState } from 'react';
import FreeCurrencyAPI from "./utils/APIs/FreeCurrencyAPI";
import Dropdown from 'react-dropdown';
import CurrencySelect from "./currencySelect";
import { HiSwitchHorizontal } from 'react-icons/hi';
import currencyData from '../data/currencyData.json';

import currencyNames from '../data/currencyNames.json';
import countryCurrencies from '../data/countryCurrencies.json';
import 'react-dropdown/style.css';

function Currency({destinationData}) {

	// Initializing all the state variables
	const [info, setInfo] = useState([]);
	const [input, setInput] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState(destinationData.properties.country_code);
	const [options, setOptions] = useState([]);
	const [output, setOutput] = useState(0);
	const [baseCurrency, setBaseCurrency] = useState("GBP");
	const [destinationCurrency, setDestinationCurrency] = useState("GBP");

	useEffect(() => {
		console.log('baseCurrency', baseCurrency);
	 }, [baseCurrency]);

	/*  
	// Get currency conversion - should have a conversion state and set that with this
	useEffect(() => {
		const countryCode = destinationData.properties.country_code;
		const currencyCode = countryCurrencies[countryCode].toUpperCase();
		setDestinationCurrency(currencyCode);

		FreeCurrencyAPI.searchTerms(baseCurrency, currencyCode)
			.then(res => {
				if (res.data.length === 0) {
					throw new Error("no results found.");
				}
				if (res.data.status === "error") {
					throw new Error(res.data.message);
				}
				console.log("res", res);
			})		
    }, [destinationData]);
 */



	/* 
	
		Select menu
		-----------
		COULD just have the destination on 'To' side
		Should have all the currencies in the From, so user can convert from whatever base currency they want.

		Can we populate the select menu so the visible labels (currencyData[countryCode].name or currencyData[countryCode].plural) differ from the values (currencyData[countryCode].code)
		When value is changed we update setFrom and SetTo just like Sam
	*/


	// Update whenever a user switches the currency
	// useEffect(() => {
	// 	setOptions(Object.keys(info));
	// 	var rate = info[to];
	// 	setOutput(input * rate);
	// }, [info, input, to]);

	// Function to switch between two currency
	function flip() {
		var temp = from;
		setFrom(to);
		setTo(temp);
	}

	return (
		<div className="container mx-auto h-auto rounded-xl" id="currency">

			{/* Heading */}
			<span className="pt-3 gap-2 flex justify-center mx-1 mt-2  bg-[#025] rounded-t-xl rounded-b h-12">
				<span className="font-itim relative text-blue-200 font-bold leading-6">Currency Converter</span>
			</span>

			{/* Base currency */}
			<div className="container py-2">
				{/* Could pass setFrom/setTo as callback prop to 2 versions of this component*/}
				<CurrencySelect currencyNames={currencyNames} menuCurrency={baseCurrency} setMenuCurrency={setBaseCurrency} />
				<CurrencySelect currencyNames={currencyNames} menuCurrency={destinationCurrency} setMenuCurrency={setDestinationCurrency} />
			</div>
		</div>
	);
}

export default Currency;