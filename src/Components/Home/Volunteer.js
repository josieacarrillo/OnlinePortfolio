import React from 'react';
import { Link } from 'react-router-dom';
import  youth from '../../images/youth.JPG'
import  serviceDirect from '../../images/serviceDirect.jpg'
import  book from '../../images/book.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Volunteer (){
    return (
         <div id = "volunteer" className="relative w-full mt-2 p-8 h-96 ">
            <div className="text-5xl font-small text-gray-700 mt-8 max-w-sm md:max-w-2xl mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer  transition-colors ">
            When Im not Working...
            </div>

            <div className = "grid grid-cols-3 text-center gap-4 pb-20">

                <div>

                <div className = "font-medium text-slate-800 text-2xl">
                    Sercice Directing
                </div>

                 <div className = "text-left font-medium text-gray-700 h-12  pb-10">
                 <p> You can find me supporting my local church pastors and team to run a smooth service. </p>
                 <div class="rounded-md h-30 pt-10">
                    <img class = "rounded-md" src={serviceDirect} alt="service directing" width={400} height={5}  />
                 </div>
                 </div>
                 </div>

                 <div>

                 <div className = "font-medium text-slate-800 text-2xl">
                 Youth Leading
                 </div>

                 <div className = "text-left font-medium text-gray-700 ">
                 <p> Leading and mentoring high schoolers on Wednesday nights. </p>

                 <div class="rounded-md pt-10">
                    <img class = "rounded-md" src={youth} alt="youth volunteering" width={400} height={400}  />
                 </div>

                 </div>
                 </div>

                 <div>
                    <div className = "font-medium text-slate-800 text-2xl ">
                    Reading & Drinking coffee
                 </div>
                 <div className = "text-center font-medium text-gray-700">
                    < p> Check out my list of reads!
                    <a href="https://docs.google.com/spreadsheets/d/1S1ADA4MltsphcgvELyzOfqBywhJmxAPeX4uADdapmeE/edit?usp=sharing" target="_blank" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                        <FontAwesomeIcon
                            icon={faUpRightFromSquare}/>
                    </a>

                    </p>
                    <div class="rounded-md pt-10">
                        <img class = "rounded-md" src={book} alt="atomic habits" width={400} height={400}  />
                    </div>
                 </div>
                 </div>

            </div>

         </div>
    )
}

export default Volunteer;