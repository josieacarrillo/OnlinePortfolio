import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import me from '../images/me.jpeg'


function Navigation(){
    return (


        <nav className ="flex justify-between space-x-4 pt-2 bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600s">
          <a href="/" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
            <img class = "rounded-full" src={me} alt="profile pic" width={30} height={30}  />
          </a>
          <div className = "flex justify-center">
          <a href="#about" class=" px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                          About
                      </a>
          <a href="#industry" class=" px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
          Industry
          </a>
          <a href="#highlights" class=" px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                    Highlights
          </a>
          <a href="#volunteer" class=" px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
          My Interests
          </a>
          <a href="#contact" class=" px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                    Contact Me
          </a>

          </div>
          <div className = "flex justify-end">
            <a href="mailto:josieacarrillo@gmail.com?subject=Testing out mailto!" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                <FontAwesomeIcon
                    icon={faEnvelope}
                />
            </a>
            <a href="https://www.linkedin.com/in/josieangelicac/" target="_blank" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                <FontAwesomeIcon
                                    icon={faLinkedin}
                                />
            </a>
            <a href="https://github.com/josieacarrillo" target="_blank" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900 ">
                <FontAwesomeIcon
                    icon={faGithub}
                />
            </a>
          </div>
        </nav>


    )
}

export default Navigation;