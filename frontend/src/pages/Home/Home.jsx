import React from 'react'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Work from './components/Work'
const Home = () => {
    return (
        <div className='container'>
            <Hero/>
            <Contact/>
            <Work/>
            <Aboutme />
        </div>
    )
}

export default Home