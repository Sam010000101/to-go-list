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


	// Update whenever a user switches the currency
	useEffect(() => {
		setOptions(Object.keys(info));
		var rate = info[to];
		setOutput(input * rate);
	}, [info, input, to]);

	// Function to switch between two currency
	function flip() {
		var temp = from;
		setFrom(to);
		setTo(temp);
	}

	return (
		<div className="container mx-auto h-auto rounded-xl" id="currency">

			{/* code for the heading box */}
			<span className="pt-3 gap-2 flex justify-center mx-1 mt-2  bg-[#025] rounded-t-xl rounded-b h-12">
				<span className="font-itim relative text-blue-200 font-bold leading-6">Currency Converter</span>
			</span>

			<div className="container py-2">
				<div className="flex justify-left gap-2 ml-2">
					<h3 className="text-black ">Amount</h3>
					<input type="text"
						placeholder="Enter the amount"
						onChange={(e) => setInput(e.target.value)} />
				</div>
				<div className="flex justify-center gap-4 py-2 text-black">
					<div className="middle flex">
						<h3 className='mr-2'>From</h3>
						<Dropdown options={options}
							onChange={(e) => { setFrom(e.value) }}
							value={from} placeholder="From" />
					</div>
					<div className="switch">
						<HiSwitchHorizontal size="30px"
							onClick={() => { flip() }} />
					</div>
					<div className="right flex">
						<h3 className='mr-2'>To</h3>
						<Dropdown options={options}
							onChange={(e) => { setTo(e.value) }}
							value={to} placeholder="To" />
					</div>
				</div>
				<div className="result flex justify-center text-black pt-2">
					<h2 className="pl-2">Converted Amount:</h2>
					<p className="pl-2"><b>{input + " " + from + " = " + output.toFixed(2) + " " + to}</b></p>

				</div>
			</div>
		</div>
	);
}

export default Currency;