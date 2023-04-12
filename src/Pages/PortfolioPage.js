import React from 'react';
import Projects from '../Components/Portfolio/Projects'
import PortfolioHeader from '../Components/Portfolio/PortfolioHeader'


class PortfolioPage extends React.Component{
    render(){
        return (
            <div className="">
                <PortfolioHeader />
                <Projects />
             </div>
        )
    }
}

export default PortfolioPage