import React from "react";

export function Sfile(){
    return(
        <>
            <form class="w-full mt-5">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
            >
                Name
            </label>
                <label for="file-input" class="sr-only">Choose file</label>
                <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                "/>
            </form>
        </>
    )
}