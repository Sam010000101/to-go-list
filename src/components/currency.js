import React from "react";

function Currency() {
    return (
        <div id="currency" className="container mx-auto bg-slate-400 h-36 rounded-xl">
            <h1>Currency</h1>
            <div className="flex flex-row justify-center">
                <div className="w-1/3 mx-5">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Base Currency
                    </label>
                    <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="pt-5">
                <p>=</p>
                </div>
                <div className="w-1/3 mx-5">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Exchange Currency
                    </label>
                    <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>
        </div>
    )
}

export default Currency;