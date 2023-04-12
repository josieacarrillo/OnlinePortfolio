import React from 'react';
import { Link } from 'react-router-dom';

function Projects (){
    return (

         <div className = "mt-16 sm:mt-20">
            <ul role ="list" className="grid grid-cols-1 gap-x-2 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                <a href="#projects/expediagroup" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:big-slate-100">
                  <div class="flex items-center space-x-3">
                    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                  </div>
                  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                </a>

                </li>
                <li>
                    <a href="#projects/expediagroup" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                        <div class="flex items-center space-x-3">
                            <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                            <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                        </div>
                        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                    </a>

                </li>
                <li>
                    <a href="#projects/expediagroup" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                        <div class="flex items-center space-x-3">
                            <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                            <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                        </div>
                        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                    </a>

                </li>

            </ul>


             </div>
    )
}

export default Projects;