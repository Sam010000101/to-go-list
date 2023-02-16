import React from "react";
import DropdownBase from "./currencyDropdownBase";
import DropdownExchange from "./currencyDropdownExchange";

function Currency() {
    return (
        <div id="currency" className="container mx-auto bg-slate-400 h-36 rounded-xl">
            <h1>Currency</h1>
            <div className="flex flex-row justify-center pt-2">
                <div className="w-1/3 mx-5">
                    <label
                        htmlFor="base-currency"
                        className="block text-sm font-medium text-gray-700 pb-2">
                        <h3 class="text-left">Base Currency</h3>
                    </label>
                    <div className="block text-sm font-medium text-gray-700 pb-1"><DropdownBase></DropdownBase></div>
                    <input
                        type="text"
                        name="base-currency"
                        id="base-currency"
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Enter base currency" />

                </div>
                <div className="pt-7">
                    <p>=</p>
                </div>
                <div className="w-1/3 mx-5">
                    <label
                        htmlFor="exchange-currency"
                        className="block text-sm font-medium text-gray-700  pb-2">
                        <h3 class="text-left">Exchange Currency</h3>
                    </label>
                    <div className="block text-sm font-medium text-gray-700 pb-1"><DropdownExchange></DropdownExchange></div>
                    <div className="pt-2" id="exchange-currency">
                        <h3 class="text-left">Currency Appears Here</h3>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Currency;