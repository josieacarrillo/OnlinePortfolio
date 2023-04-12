import React from 'react';


function About () {
    return (
        <div id = "about" className = "sm:px-8 mt-9 pt-20 pb-20 bg-gray-100 flex items-stretch h-screen">
            <div className = "mx-auto max-w-7xl lg:px-8">
                <div className = "relative px-4 sm:px-8 lg:px-12">
                    <div className = "mx-auto max-w-2xl lg:max-w-5xl grid grid-cols-2 pt-8">
                    <div></div>
                        <div className = "max-w-2xl ">
                            <h1 className = "text-3xl font-medium text-gray-700 mt-8">
                            About Me
                            </h1>
                            <p className = "mt-6 text-base text-zinc-600 dark:text-zinc-400">
                            Im currently on track to graduate with my Bachelors in May. I have 4 internships under my belt. Im focusing on program management.
                            I am a former SDE and love all things organization, collaboration and communication!

                            </p>
                            <p className = "mt-6 text-base text-zinc-600 dark:text-zinc-400">
                            I've spent 4 years discovering my true passion - and its in project management. A space where my vision can come to life through amazing and talented engineers.
                            </p>
                            <p className = "mt-6 text-base text-zinc-600 dark:text-zinc-400">
                            I love learning new tools that'll benefit everyone.

                            </p>
                            <div className = "pt-4">
                                <button onclick= "" type="button" class="py-2 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">My Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default About;