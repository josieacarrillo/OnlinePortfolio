import React from 'react';


function Branding (){
    return (
        <div className="flex items-stretch h-screen ">
        <div className = "">

                <h1 className ="pt-48 sm:text-center text-3xl font-normal tracking-tight text-gray-700 sm:text-5xl"> Student, Visionary, & Technical Program Manager. </h1>
                    <p className="mx-auto sm:text-center mt-6 max-w-2xl text-lg leading-8 text-gray-600 ">
                         Hi, Im Josie and I bridge the gap between business and tech.

                    </p>




        </div>

        <div class="self-auto pt-10">
            <img
                                                src = {"https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"}
                                                sizes="(min-width: 1000px) 32rem, 32rem"
                                                width="600"
                                                height="800"
                                                class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 pt-10 pr-10"
                                                />
        </div>

        </div>
    )
}

export default Branding;