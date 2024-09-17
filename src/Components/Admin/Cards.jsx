import React from "react";

export function Cards(){
    return(
        <>
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 mx-4 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:mx-48 lg:gap-x-56">
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Companies</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Pending Companies Approval</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Registered Students</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Pending Student Confirmation</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Total Drive Post</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Total Drive Applications</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                
            </div>
        </>
    )
}