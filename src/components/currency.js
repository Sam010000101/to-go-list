import { React, useEffect, useState } from 'react';
import CurrencyAPI from "./utils/APIs/CurrencyAPI";
import CurrencySelect from "./currencySelect";
import countryCurrencies from '../data/countryCurrencies.json';
import 'react-dropdown/style.css';

function Currency({ destinationData }) {

	const [currencyNames, setCurrencyNames] = useState(null);	
	const [baseCurrency, setBaseCurrency] = useState("GBP British pounds");
	const [destinationCurrency, setDestinationCurrency] = useState(null);
	const [baseValue, setBaseValue] = useState(1);
	const [destinationValue, setDestinationValue] = useState(1);

	useEffect(() => {		
		function filterCurrencyNames(names) {
			const unwanted = [
				"ada",
				"amp",
				"ar",
				"axs",
				"bat",
				"bch",
				"bnb",
				"bsv",
				"bsw",
				"btc",
				"btg",
				"cvx",
				"dcr",
				"dfi",
				"dot",
				"enj",
				"eos",
				"eth",
				"fei",
				"fil",
				"ftm",
				"ftt",
				"ggp",
				"gno",
				"grt",
				"hnt",
				"hot",
				"icp",
				"imp",
				"inj",
				"kcs",
				"knc",
				"ksm",
				"leo",
				"lrc",
				"ltc",
				"mkr",
				"neo",
				"okb",
				"one",
				"qnt",
				"sle",
				"std",
				"stx",
				"trx",
				"ttt",
				"uni",
				"ves",
				"vet",
				"xag",
				"xau",
				"xdc",
				"xdr",
				"xec",
				"xem",
				"xlm",
				"xmr",
				"xrp",
				"xtz",
				"zec",
				"zil"

			];
			
			const filteredNames = {};
			for (let key in names) {
				if (names.hasOwnProperty(key)) {
				   if (key.length === 3 && !unwanted.includes(key)){
					filteredNames[key] = names[key];
				   }
				}
			 }
			 
			return filteredNames;
		}

		CurrencyAPI.getCurrencies()
			.then(res => {
				if (res.data.length === 0) {
					throw new Error("no results found.");
				}
				if (res.data.status === "error") {
					throw new Error(res.data.message);
				}
				const filteredNames = filterCurrencyNames(res.data);
				setCurrencyNames(filteredNames);
				const destCurrCode = countryCurrencies[destinationData.properties.country_code];
				setDestinationCurrency(`${destCurrCode.toUpperCase()} ${filteredNames[destCurrCode]}`);
			});
	}, []);

	function getCode(str) {
		return str.slice(0,3).toLowerCase();
	}

    function updateCurrency(from, to, amount, callback) {
		if (currencyNames) {
			// Get the latest exchange rate
			const toCode = getCode(to);
			CurrencyAPI.searchTerms(getCode(from), toCode)
				.then(res => {
					if (res.data.length === 0) {
						throw new Error("no results found.");
					}
					if (res.data.status === "error") {
						throw new Error(res.data.message);
					}
					const rate = res.data[toCode];

					// Perform the calculation and pass to callback
					callback((amount * rate).toFixed(2));
				});
		}
	}

	useEffect(() => {
		if (destinationCurrency) {
			updateCurrency(baseCurrency, destinationCurrency, baseValue, setDestinationValue);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [baseCurrency, destinationCurrency, currencyNames]);
	
	useEffect(() => {
		if (currencyNames) {
			const destCurrCode = countryCurrencies[destinationData.properties.country_code];
			setDestinationCurrency(`${destCurrCode.toUpperCase()} ${currencyNames[destCurrCode]}`);
			updateCurrency(baseCurrency, destinationCurrency, baseValue, setDestinationValue);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [destinationData]);

	return (
		<div className="container mx-auto h-auto rounded-xl" id="currency">

			{/* Heading */}
			<span className="pt-3 gap-2 flex justify-center mx-1 mt-2  bg-[#025] rounded-t-xl rounded-b h-12">
				<span className="font-itim relative text-blue-200 font-bold leading-6">Currency Converter</span>
			</span>
			<div className="container py-2">
				<input value={baseValue} onChange={(e) => {
					setBaseValue(e.target.value);
					updateCurrency(baseCurrency, destinationCurrency, e.target.value, setDestinationValue);
				}} />
				<CurrencySelect zi={10} currencyNames={currencyNames} menuCurrency={baseCurrency} setMenuCurrency={setBaseCurrency} />
				<input value={destinationValue} onChange={(e) => {
					setDestinationValue(e.target.value);
					updateCurrency(destinationCurrency, baseCurrency, e.target.value, setBaseValue);
				}} />
				<CurrencySelect  zi={0} currencyNames={currencyNames} menuCurrency={destinationCurrency} setMenuCurrency={setDestinationCurrency} />
			</div>
		</div>
	);
}

export default Currency;