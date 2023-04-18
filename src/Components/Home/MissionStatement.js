
function MissionStatement (){
    return (
         <div className="relative w-full mt-2 p-8 h-96 bg-gray-100 ">
            <div className="text-5xl pb-20 font-small text-gray-700 mt-8 max-w-sm md:max-w-2xl mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer  transition-colors ">
                                   I lead programs and projects to completion.
            </div>
            <div className = "grid grid-cols-3 text-center gap-4 pb-20">
                                        <div>
                                            <div className = "font-medium text-slate-800 text-2xl">
                                                What I do
                                            </div>

                                            <div className = "text-left font-medium text-gray-700 h-12">
                                                <li> Build Amazing Teams </li>
                                                <li> Scale programs </li>
                                                <li> Leave projects better than I found them </li>
                                            </div>

                                            </div>
                                        <div>
                                            <div className = "font-medium text-slate-800 text-2xl">
                                                What I use
                                            </div>
                                            <div className = "text-left font-medium text-gray-700 h-12">
                                                <li> JIRA </li>
                                                <li> FIGMA </li>
                                                <li> Confluence </li>
                                            </div>
                                        </div>


                                        <div>
                                            <div className = "font-medium text-slate-800 text-2xl ">
                                                What you can expect
                                            </div>
                                            <div className = "text-left font-medium text-gray-700 h-12">
                                                <li> Customer Obsession </li>
                                                <li> Data-Driven </li>
                                                <li> Collaboration </li>
                                            </div>
                                        </div>

                                    </div>
         </div>

    )
}

export default MissionStatement;