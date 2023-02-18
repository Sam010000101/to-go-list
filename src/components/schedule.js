import React from "react";

function Schedule() {
    return (

        <div id="schedule" className="flex flex-col justify-center rounded-xl h-auto bg-white w-full container mx-auto pb-5">

            {/* Module Header */}
            <span class="flex h-12 pt-3 gap-2 flex justify-center mx-1 mt-2 before:block before:absolute before:-inset-1 before:bg-indigo-900 relative inline-block before:rounded-t-xl before:rounded-b">
                <span class="relative text-blue-200 font-bold leading-6">ACTIVITY SCHEDULE</span>
                <span className="absolute inset-y-0 flex flex-col pl-2 pt-1 relative">
                    <svg className="h-5 w-5 pb-1 fill-slate-300" viewBox="0 0 31.982 31.982">	<path d="M3.952,23.15L0,31.955l8.767-3.992l0.018,0.019L3.938,23.13L3.952,23.15z M4.602,22.463L24.634,2.432l4.849,4.848 L9.45,27.312L4.602,22.463z M30.883,0.941c-2.104-1.963-4.488-0.156-4.488-0.156l4.851,4.843 C31.244,5.627,33.124,3.375,30.883,0.941z" /></svg>
                </span>
            </span>

            {/* Schedule blocks */}
            <div className="container mx-auto pt-2 pb-5">
                <div className="flex pb-2">
                    <div className="w-full">
                        <span class="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
                            <span class="relative text-white text-left">DAY 1</span>
                        </span>
                        <label className="relative block">
                            <textarea id="day-1-text-area" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none" placeholder="Activities for Day 1..." type="text" name="search" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex pb-2">
                    <div className="w-full">
                        <span class="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
                            <span class="relative text-white text-left">DAY 2</span>
                        </span>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <textarea id="day-2-text-area" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none " placeholder="Activities for Day 2..." type="text" name="search" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex pb-2">
                    <div className="w-full">
                        <span class="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
                            <span class="relative text-white text-left">DAY 3</span>
                        </span>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <textarea id="day-3-text-area" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none" placeholder="Activities for Day 3..." type="text" name="search" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex pb-2">
                    <div className="w-full">
                        <span class="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
                            <span class="relative text-white text-left">DAY 4</span>
                        </span>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <textarea id="day-4-text-area" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none" placeholder="Activities for Day 4..." type="text" name="search" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex pb-2">
                    <div className="w-full">
                        <span class="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
                            <span class="relative text-white text-left">DAY 5</span>
                        </span>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <textarea id="day-5-text-area" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none" placeholder="Activities for Day 5..." type="text" name="search" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex pb-2">
                    <div className="w-full">
                        <span class="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
                            <span class="relative text-white text-left">DAY 6</span>
                        </span>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <textarea id="day-6-text-area" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none" placeholder="Activities for Day 6..." type="text" name="search" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex pb-2">
                    <div className="w-full">
                        <span class="flex justify-center mx-1 my-1 gap-1 before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-blue-500 to-blue-200 relative inline-block before:rounded-t-xl">
                            <span class="relative text-white text-left">DAY 7</span>
                        </span>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <textarea id="day-7-text-area" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-b-xl border border-slate-300 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-white-500 focus:ring-inset ring-emerald-300 focus:ring-1 sm:text-sm resize-none" placeholder="Activities for Day 7..." type="text" name="search" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex w-full px-3 py-2 gap-2">
                    <div className="flex justify-start w-1/2 gap-x-5">
                        <button className="hover:bg-emerald-600 w-32 py-5 border-solid border-2 rounded-full border-white-600 bg-emerald-500">
                            <a className="btn saveBtn text-white" href="#" role="button" id="save-Btn">SAVE</a>
                        </button>
                    </div>
                    <div className="flex justify-end w-1/2 gap-x-5">
                        <button className="hover:bg-rose-500 w-32 py-5 border-solid border-2 rounded-full border-white-600 bg-rose-600	">
                            <a className="btn saveBtn text-white" href="#" role="button" id="reset-Btn">RESET</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default Schedule;