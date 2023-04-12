import React from 'react';
import { Link } from 'react-router-dom';
import  tiktok from '../../images/tiktok.png'
import  amazon from '../../images/amazon.jpg'
import expedia from '../../images/expedia.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects (){
    return (
         <div id = "highlights" className="relative w-full mt-2 p-8 h-screen ">
            <div className="text-5xl pb-5 font-small text-gray-700 mt-8 max-w-sm md:max-w-2xl mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer  transition-colors ">
            Internship Highlights
            </div>
            <div className = "grid grid-cols-3 gap-x-12 ">
                <div className = " hover:bg-gray-100 relative pt-5 px-5 py-10 bg-white rounded-md shadow dark:bg-gray-900 pl-20">
                    <div>
                        <img src={tiktok} alt="Day in the life tiktok" className="rounded-md" width={200} height={100}  />
                    </div>
                    <div>
                        <p className = "font-medium text-gray-900"> Tiktok </p>
                            <p className = "font-medium text-gray-700 h-12 pb-10"> Day in the life of an intern. Follow along what a day as a TPM looked in in Austin Texas for Expedia Group.
                                <a href="https://www.linkedin.com/posts/josieangelicac_a-day-in-the-life-of-expedia-group-interns-activity-6965725998776545280-CBPr?utm_source=share&utm_medium=member_desktop" target="_blank" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                                    <FontAwesomeIcon
                                    icon={faUpRightFromSquare}/>
                                </a>
                            </p>
                    </div>
                </div>
               <div className = "hover:bg-gray-100 relative pt-5 px-5 py-10 bg-white rounded-md shadow dark:bg-gray-900 pl-20">
                    <div className = "pt-5">
                        <img src={amazon} alt="whiteboard notes" className="rounded-md" width={200} height={200}   />
                    </div>
                    <div className = "pt-3">
                        <p className = "font-medium text-gray-900"> AFE internship </p>
                        <p className = "font-medium text-gray-700 h-12 pb-10"> My first internship as an SDE, the day I should have realized my passion for project management. I have always enjoyed the planning and initiation phase of projects!

                        </p>
                    </div>
               </div>
                <div className = "hover:bg-gray-100 relative pt-5 px-5 py-10 bg-white rounded-md shadow dark:bg-gray-900 pl-20">
                    <div className = "pt-5">
                        <img src={expedia} alt="whiteboard notes" className="rounded-md" width={400} height={250}  />
                    </div>
                    <div className = "pt-5">
                        <p className = "font-medium text-gray-900"> TPM @ Expedia </p>
                        <p className = "font-medium text-gray-700 h-12 pb-10"> My first internship as a TPM. Where I got to lead a team of 6 engineers through an agile environment.</p>
                    </div>
               </div>
            </div>
         </div>
    )
}

export default Projects;