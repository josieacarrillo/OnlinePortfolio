import React from 'react';
import Branding from '../Components/Home/Branding'
import Projects from '../Components/Home/Projects'
import Companies from '../Components/Home/Companies'
import MissionStatement from '../Components/Home/MissionStatement'
import CurrentWork from '../Components/Home/CurrentWork'
import ArrowBreak from '../Components/Home/ArrowBreak'
import Background from '../Components/Home/Background'
import Footer from '../Components/Footer'
import About from '../Components/Home/About'
import Volunteer from '../Components/Home/Volunteer'
import Contact from '../Components/Home/Contact'


class HomePage extends React.Component{
    render(){
        return (

          <div>

                <div class="mx-8">
                    <Branding />
                    <div className = "object-center">
                        <About />
                        <Companies />
                        <MissionStatement />
                        <Projects />
                        <Background />
                        <Volunteer />
                        <Contact />
                    </div>
                </div>
            <Footer/>
          </div>
        )
    }
}

export default HomePage