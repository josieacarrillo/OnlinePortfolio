import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import  amazonlogo from '../../images/amazonlogo.svg'
import  ExpediaLogo from '../../images/ExpediaLogo.svg'



function Companies (){
    return (
    <div id = "industry">
         <div className="relative w-full mt-2 pb-20 h-80 pt-10">
                         <div className="text-5xl font-small text-gray-700 mt-8 max-w-sm md:max-w-2xl mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer  transition-colors ">
                           Companies
                         </div>

                        <div className = "grid grid-cols-3 text-center gap-4 ">
                            <div className = "col-span-2 pl-20">
                            <img src={amazonlogo} alt="Amazon Logo" width={200} height={200}  />
                            </div>
                            <div>
                            <img src={ExpediaLogo} alt="Expedia Logo" width={200} height={200} />
                            </div>
                        </div>

                     </div>
         </div>
    )
}

export default Companies;