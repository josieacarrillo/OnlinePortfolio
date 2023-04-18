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
                            <p className = "mt-6 text-base text-gray-700 dark:text-zinc-400">
                            I am a soon-to-be college graduate with a Bachelors in Computer Science. I have racked up 4 internships under my belt.
                            I am a former SDE, turned Technical Program Manager and love all things organization, collaboration and communication!

                            </p>
                            <p className = "mt-6 text-base text-gray-700 dark:text-zinc-400">
                            I will forever be grateful for launching my career at Amazon as an Amazon Future Engineer SDE intern, after a semester in Computer Science.
                            They saw the gold in me, and really ignited that passion for launching, communicating, and managing projects.
                            </p>
                            <p className = "mt-6 text-base text-gray-700 dark:text-zinc-400">
                            I will never despise small beginnings, in fact I take joy in the process of growth. I threw myself in corporate America at 18, and learned so much on the job. I will always advocate for stepping out in Faith and testing your limits.  Which is why I firmly believe I am in the correct industry and position. I would love to partner with anyone who is passionate for the same growth!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default About;