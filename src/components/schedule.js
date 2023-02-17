import React from "react";

function Schedule() {
    return (
        <div id="schedule" className="rounded-xl container mx-auto h-auto bg-slate-400 ">
            <h1 className="text-white">ACTIVITY SCHEDULE</h1>
            {/* SCHEDULE BLOCKS */}
            <div className="container mx-auto py-5">
                <div className="flex px-5 py-2 gap-2">
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600"><h3 className="text-white">MON</h3></div>
                    <div className="w-5/6">
                    <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Activities for Monday..." type="text" name="search" />
                        </label>
                    </div>
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600">
                        <a className="btn saveBtn " href="#" role="button" id="dayBlock-1-Btn"><svg class="inline justify-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg></a>
                    </div>
                </div>
                <div className="flex px-5 py-2 gap-2">
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600"><h3 class="text-white">TUE</h3></div>
                    <div className="w-5/6">
                    <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Activities for Tuesday..." type="text" name="search" />
                        </label>
                    </div>
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600">
                        <a className="btn saveBtn " href="#" role="button" id="dayBlock-2-Btn"><svg class="inline justify-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg></a>
                    </div>
                </div>
                <div className="flex px-5 py-2 gap-2">
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600"><h3 class="text-white">WED</h3></div>
                    <div className="w-5/6">
                    <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Activities for Wednesday..." type="text" name="search" />
                        </label>
                    </div>
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600">
                        <a className="btn saveBtn " href="#" role="button" id="dayBlock-3-Btn"><svg class="inline justify-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg></a>
                    </div>
                </div>
                <div className="flex px-5 py-2 gap-2">
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600"><h3 class="text-white">THU</h3></div>
                    <div className="w-5/6">
                    <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Activities for Thursday..." type="text" name="search" />
                        </label>
                    </div>
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600">
                        <a className="btn saveBtn " href="#" role="button" id="dayBlock-4-Btn"><svg class="inline justify-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg></a>
                    </div>
                </div>
                <div className="flex px-5 py-2 gap-2">
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600"><h3 class="text-white">FRI</h3></div>
                    <div className="w-5/6">
                    <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Activities for Friday..." type="text" name="search" />
                        </label>
                    </div>
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600">
                        <a className="btn saveBtn " href="#" role="button" id="dayBlock-5-Btn"><svg class="inline justify-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg></a>
                    </div>
                </div>
                <div className="flex px-5 py-2 gap-2">
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600"><h3 class="text-white">SAT</h3></div>
                    <div className="w-5/6">
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Activities for Saturday..." type="text" name="search" />
                        </label>
                    </div>
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600">
                        <a className="btn saveBtn " href="#" role="button" id="dayBlock-6-Btn"><svg class="inline justify-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg></a>
                    </div>
                </div>
                <div className="flex px-5 py-2 gap-2">
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600"><h3 class="text-white">SUN</h3></div>
                    <div className="w-5/6">
                    <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Activities for Sunday..." type="text" name="search" />
                        </label>
                    </div>
                    <div className="w-32 py-5 border-solid border-2 rounded border-white-600">
                        <a className="btn saveBtn " href="#" role="button" id="dayBlock-7-Btn"><svg class="inline justify-center" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg></a>
                    </div>
                </div>
            </div>
            {/* </div> */}




        </div>

    )
}

export default Schedule;