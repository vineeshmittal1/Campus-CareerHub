import React from "react";
export function CForm() {
    return (
        <>
            <div className="mx-10 ">
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="cname"
                        >
                            Company Name
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Company name"
                            id="fname"
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="Cnumber"
                        >
                            Contact Number
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your contact number"
                            id="Cnumber"
                        ></input>
                    </div>
                </div>
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="website"
                        >
                            Website
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your website"
                            id="website"
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your email"
                            id="email"
                        ></input>
                    </div>
                </div>
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="city"
                        >
                            City
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your city"
                            id="city"
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="state"
                        >
                            State
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your State"
                            id="state"
                        ></input>
                    </div>
                </div>
                <div className="flex gap-11">
                    <div class="w-full mt-5">
                        <label for="textarea-label" class="block text-sm font-medium mb-2">Address</label>
                        <textarea id="textarea-label" class="py-3 px-4 block w-full border-2 border-black/30 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="2" placeholder="Enter your Address"></textarea>
                    </div>
                    <div class="w-full mt-5">
                        <form class="w-full mt-5">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                        >
                            Profile Photo
                        </label>
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                "/>
                    </form>
                    </div>
                </div>
                {/* <button type="button" class="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Update profile
                </button> */}
            </div>
        </>
    )
}