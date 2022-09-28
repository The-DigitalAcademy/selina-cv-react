import React from 'react'
import { Navbar } from 'react-bootstrap';
import Profile from './ Profile';

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className='col s12 m4 13'>
                <Profile />
            </div>
            <div className='col s12 m8 19'>
                {/* <Portfolio />
                <About />
                <Skills />
                <Contact /> */}
            </div>

        </div>
    )
}

export default Home;
