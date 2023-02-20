import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';

function Currency() {

// Initializing all the state variables
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);

// Calling the api whenever the dependency changes
useEffect(() => {
	Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
.then((res) => {
	setInfo(res.data[from]);
	})
}, [from]);

// Calling the convert function whenever
// a user switches the currency
useEffect(() => {
	setOptions(Object.keys(info));
	convert();
}, [info])
	
// Function to convert the currency
function convert() {
	var rate = info[to];
	setOutput(input * rate);
}

// Function to switch between two currency
function flip() {
	var temp = from;
	setFrom(to);
	setTo(temp);
}

return (
	<div className="container mx-auto bg-indigo-900 h-36 rounded-xl" id="currency">
	<div className="heading relative uppercase text-center text-blue-200 font-bold leading-6">
		<h1>Currency converter</h1>
	</div>
	<div className="container">
		<div className="flex justify-left gap-2 ml-2">
		<h3 className="text-white ">Amount</h3>
		<input type="text"
			placeholder="Enter the amount"
			onChange={(e) => setInput(e.target.value)} />
        <button className="rounded-full bg-blue-200 px-2 text-indigo-900" onClick={()=>{convert()}}>Convert</button>
		</div>
        <div className="flex justify-center gap-4 py-2 text-white">
		<div className="middle flex">
		<h3>From</h3>
		<Dropdown options={options}
					onChange={(e) => { setFrom(e.value) }}
		value={from} placeholder="From" />
		</div>
		<div className="switch">
		<HiSwitchHorizontal size="30px"
						onClick={() => { flip()}}/>
		</div>
        <div className="right flex">
		<h3>To</h3>
		<Dropdown options={options}
					onChange={(e) => {setTo(e.value)}}
		value={to} placeholder="To" />
		</div>
	</div>
	<div className="result flex justify-center text-white pt-2">
		<h2 className="pl-2">Converted Amount:</h2>
		<p className="pl-2"><b>{input+" "+from+" = "+output.toFixed(2) + " " + to}</b></p>

	</div>
	</div>
            </div>
);
}

export default Currency;


// import React from "react";
// import DropdownBase from "./currencyDropdownBase";
// import DropdownExchange from "./currencyDropdownExchange";
// import CurrencyAPI from "./utils/APIs/CurrencyAPI";

// function Currency() {
//     return (
//         <div id="currency" className="container mx-auto bg-slate-400 h-36 rounded-xl">
//                         <h1 className="text-lg font-semibold leading-6">CURRENCY CONVERTOR</h1>
//             <div className="flex flex-row justify-center pt-2">
//                 <div className="w-1/3 mx-5">
//                     <label
//                         htmlFor="base-currency"
//                         className="block text-sm font-medium text-gray-700 pb-2">
//                         <h3 class="text-left">Base Currency</h3>
//                     </label>
//                     <div className="block text-sm font-medium text-gray-700 pb-1"><DropdownBase></DropdownBase></div>
//                     <input
//                         type="text"
//                         name="base-currency"
//                         id="base-currency"
//                         className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
//                         placeholder="Enter base currency" />

//                 </div>
//                 <div className="pt-7">
//                     <p>=</p>
//                 </div>
//                 <div className="w-1/3 mx-5">
//                     <label
//                         htmlFor="exchange-currency"
//                         className="block text-sm font-medium text-gray-700  pb-2">
//                         <h3 className="text-left">Exchange Currency</h3>
//                     </label>
//                     <div className="block text-sm font-medium text-gray-700 pb-1"><DropdownExchange></DropdownExchange></div>
//                     <div className="pt-2" id="exchange-currency">
//                         <h3 className="text-left">Currency Appears Here</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>

        
//     )
// }

// export default Currency;