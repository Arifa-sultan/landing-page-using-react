import React from 'react'
// import { Navbar } from 'react-bootstrap'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Logos from './components/logos/logos'
import Awesomesection from './components/Awesomesection/Awesomesection'
import CreativitySection from './components/Creativity/CreativitySection'
import Projects from './components/Projects/Projects'
import Study from './components/study/study'
import Blog from './components/Blog/Blog'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Logos/>
      <Awesomesection/>
      <CreativitySection/>
      <Projects/>
     <Study/>
     <Blog/>
     <Testimonial/>
     <Contact/>
    </div>
  )
}

export default App
