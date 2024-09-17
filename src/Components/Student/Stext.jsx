import React from "react";

export function Stext(props){
    return (
        <>
            <div class="w-full mt-5">
            <label for="textarea-label" class="block text-sm font-medium mb-2">Comment</label>
            <textarea id="textarea-label" class="py-3 px-4 block w-full border-neutral-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="2" placeholder={props.comment}></textarea>
            </div>
        </>
    )
}