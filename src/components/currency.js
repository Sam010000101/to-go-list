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

	// Function to switch between two currencies
	function flip() {
		var temp = from;
		setFrom(to);
		setTo(temp);
	}

	return (
		// Container for header & currency convertor section
		<div className="container mx-auto bg-indigo-900 h-36 rounded-xl" id="currency">
			<div className="heading relative uppercase text-center text-blue-200 font-bold leading-6">
				<h1>Currency converter</h1>
			</div>
			// Container for currency amount, from and to conversion, converted amount i.e user inputs
			<div className="container">
				<div className="flex justify-left gap-2 ml-2">
					<h3 className="text-white ">Amount</h3>
					<input type="text"
						placeholder="Enter the amount"
						onChange={(e) => setInput(e.target.value)} />
					<button className="rounded-full bg-blue-200 px-2 text-indigo-900" onClick={() => { convert() }}>Convert</button>
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
							onClick={() => { flip() }} />
					</div>
					<div className="right flex">
						<h3>To</h3>
						<Dropdown options={options}
							onChange={(e) => { setTo(e.value) }}
							value={to} placeholder="To" />
					</div>
				</div>
				<div className="result flex justify-center text-white pt-2">
					<h2 className="pl-2">Converted Amount:</h2>
					<p className="pl-2"><b>{input + " " + from + " = " + output.toFixed(2) + " " + to}</b></p>

				</div>
			</div>
		</div>
	);
}

export default Currency;