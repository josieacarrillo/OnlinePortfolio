import React from 'react';
import { Link } from 'react-router-dom';

function Background (){
    return (
         <div>
            <div className = " p-8 grid grid-cols-2 gap-4 bg-gray-100">
                <div>
                    <h2 className = " text-4xl font-small text-gray-700 "> Education </h2>
                    <div className = "pt-6 h-32">
                        <p className = "font-medium text-gray-900"> San Diego State University </p>
                        <p className="font-medium text-gray-700 h-12">
                            Bachelors: Computer Science
                        </p>
                    </div>
                    <div className = "h-32">
                        <p className = "font-medium text-gray-900"> Google Project Management </p>
                        <p className="font-medium text-gray-700 h-12">
                            Certification
                        </p>
                    </div>

                </div>

                <div>
                   <h2 className = " text-4xl font-small text-gray-700"> Industry Experience </h2>
                    <div className = "pt-6 h-32">
                        <p className = "font-medium text-gray-900"> Expedia Group </p>
                        <p className="font-medium text-gray-700 ">
                            Technical Program Manager Intern
                        </p>
                        <p className="font-medium text-gray-700 h-12">
                            Summer 2022
                        </p>
                        </div>
                        <div className = "h-32">
                        <p className = "font-medium text-gray-900">Amazon Web Services </p>
                        <p className="font-medium text-gray-700">
                            Software Development Engineer Intern
                        </p>
                        <p className="font-medium text-gray-700 h-12">
                                                        Summer 2021
                        </p>
                        </div>
                        <div className = "h-32">
                            <p className = "font-medium text-gray-900">Amazon Web Services </p>
                            <p className="font-medium text-gray-700">
                                Software Development Engineer Intern
                            </p>
                            <p className="font-medium text-gray-700 h-12">
                                                            Summer 2020
                            </p>
                        </div>
                        <div className = "h-32">
                            <p className = "font-medium text-gray-900">Amazon Web Services </p>
                            <p className="font-medium text-gray-700 ">
                               Amazon Future Engineer: Software Development Engineer Intern
                            </p>
                            <p className="font-medium text-gray-700 h-12">
                                                           Summer 2019
                            </p>
                        </div>
                </div>
            </div>
         </div>
    )
}

export default Background;