'use client'

import React from "react";
import { Navbar } from './Navbar_home'
import { Menu, X, MapPin } from 'lucide-react'
import { Footer } from "./Footer";
const locations = [
    {
      title: 'Placement Cell Office',
      timings: 'Mon-Sat 9am to 5pm.',
      address: 'IIIT Allahabad 211012 Uttar Pradesh India',
    },
  ]

function Connectus() {
    return(
        <>  
            <div>
            <Navbar/>
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-7xl py-12 md:py-24">
                <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                    {/* contact from */}
                    <div className="flex items-center justify-center">
                    <div className="px-2 md:px-12">
                        <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                        <p className="mt-4 text-lg text-gray-600">
                        Our friendly team would love to hear from you.
                        </p>
                        <form action="" className="mt-8 space-y-4">
                        <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                            <div className="grid w-full  items-center gap-1.5">
                            <label
                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="first_name"
                            >
                                First Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="text"
                                id="first_name"
                                placeholder="First Name"
                            />
                            </div>
                            <div className="grid w-full  items-center gap-1.5">
                            <label
                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="last_name"
                            >
                                Last Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="text"
                                id="last_name"
                                placeholder="Last Name"
                            />
                            </div>
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                            <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border-gray-300"
                            htmlFor="email"
                            >
                            Email
                            </label>
                            <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="text"
                            id="email"
                            placeholder="Email"
                            />
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                            <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="phone_number"
                            >
                            Phone number
                            </label>
                            <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:text-black dark:focus:ring-black dark:focus:ring-offset-gray-900"
                            type="tel"
                            id="phone_number"
                            placeholder="Phone number"
                            />
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                            <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="message"
                            >
                            Message
                            </label>
                            <textarea
                            className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:text-black dark:focus:ring-black dark:focus:ring-offset-gray-900"
                            id="message"
                            placeholder="Leave us a message"
                            cols={3}
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Send Message
                        </button>
                        </form>
                    </div>
                    </div>
                    <iframe id="map-canvas" className="map_part hidden max-h-full w-full rounded-lg object-cover lg:block"   width="1450" 
                    height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Indian Institute of Information Technology, Allahabad Priya Shringar Kendra, 4, IIIT Rd, Indian Institute of Information Technology, Jhalwa, Prayagraj, Saha Urf Pipalgaon, Uttar Pradesh 211012&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com">html embed google maps</a> and <a href="https://starburstnotongamstop.org/">starburstnotongamstop.org</a></iframe>
                </div>
                </div>
            </div>
            {/* Address */}
            <div className="rounded-lg bg-gray-100">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="py-20">
                    <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
                    <div className="space-y-4">
                        <p className="w-full text-4xl font-bold text-gray-900">Our Offices</p>
                        <p className="w-full text-lg text-gray-600">Find us at these locations.</p>
                    </div>
                    <div className="space-y-4 divide-y-2">
                        {locations.map((location) => (
                        <div
                            key={location.title}
                            className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                        >
                            <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                            <p className="w-full text-base  text-gray-600">{location.timings}</p>
                            <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <hr className="mt-6" />
            </div>
            <Footer/>
        </>
    )
}

export default Connectus