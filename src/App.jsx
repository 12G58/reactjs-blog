import { BrowserRouter } from 'react-router-dom'; 
import {Route, Routes} from 'react-router-dom'; 

import {Logic, Contact, Science, Nlp, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


const App = () => { 
  return (
    <BrowserRouter>

    <div className = "relative z-0 bg-primary">
      <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar /> 
      </div>
      <Routes>
        <Route path = '/' element = { <><div  className = "bg-hero-pattern bg-cover bg-no-repeat bg-center"> < Hero /></div> <div className = "bg-black"> <Nlp /></div></>} /> 
        <Route path = '/logic' element = { <Logic /> } />
        <Route path = '/science' element = { <Science /> } />
        <Route path = '/machines' element = { <Tech /> } />
        <Route path = '/philosophy' element = { <Works /> } /> 

      </Routes>
      
      <div className = "relatie z-0">
        <Contact /> 
        <StarsCanvas /> 
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
