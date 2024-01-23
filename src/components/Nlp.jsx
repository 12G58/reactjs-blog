import React from 'react'
import { SectionWrapper } from '../hoc'; 
import {styles} from '../styles'; 
import {solar_system} from '../utils/solar_system'; 


const Nlp = () => {
  return (
    <div className = "text-white font-mono"> <h1 className = {`${styles.sectionSubText}`}>All thought begins at classification...</h1>
    {solar_system()}
    </div>
  )
}

export default SectionWrapper(Nlp, "nlp"); 