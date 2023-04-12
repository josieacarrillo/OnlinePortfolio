import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact (){
    return (
         <div id ="contact" className="relative w-full mt-2 p-8 h-96 bg-gray-100">
            <div className="text-5xl font-small text-gray-700 mt-8 max-w-sm md:max-w-2xl mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer  transition-colors ">
            Contact
            </div>

            <div className = "grid grid-cols-3 text-center gap-4 pb-20">

                <div>

                <div className = "font-medium text-slate-800 text-2xl text-base font-thin text-gray-500 hover:text-gray-900">
                    Add me on Linkedin:
                    <a href="https://www.linkedin.com/in/josieangelicac/" target="_blank" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                                    <FontAwesomeIcon
                                                        icon={faLinkedin}
                                                    />
                                </a>
                </div>
                </div>

                 <div>

                 <div className = "font-medium text-slate-800 text-2xl text-base font-thin text-gray-500 hover:text-gray-900">
                 Send me an Email: <a href="mailto:josieacarrillo@gmail.com?subject=Testing out mailto!" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                 <FontAwesomeIcon
                    icon={faEnvelope}
                 />
                 </a>
                 </div>
                 </div>

                 <div>
                    <div className = "font-medium text-slate-800 text-2xl text-base font-thin text-gray-500 hover:text-gray-900">
                    Check out my Github:
                    <a href="https://github.com/josieacarrillo" target="_blank" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900 ">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                    />
                                </a>

                    </div>

                 </div>

            </div>

         </div>
    )
}

export default Contact;