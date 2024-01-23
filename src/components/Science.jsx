import { VerticalTimeline, VerticalTimelineElement} from 
'react-vertical-timeline-component'; 

import {motion} from 'framer-motion'; 

import 'react-vertical-timeline-component/style.min.css'; 
import {styles} from '../styles'; 
import { experiences } from '../constants'; 
import { SectionWrapper } from '../hoc'; 
import {textVariant } from '../utils/motion'; 

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement contentStyle = {{background: '#1d1836', color: '#fff'}} contentArrowStyle = {{borderRight: '7px solid #232631'}} date = {experience.date} iconStyle = {{background: experience.iconBg}} 
  icon = {<div> 
    <img src = {experience.icon} 
    alt = {experience.company_name} 
    className = "w-[60%] h-[60%] object-contain"/> 
  </div>}>

  </VerticalTimelineElement>
)
const Science = () => {
  return (
    <>
      <motion.div variants = {textVariant()} className = "bg-black">
        <p className = {`${styles.sectionSubText} bg-black`}>
          The formation of thought begins with classification... 
        </p>
        <h2 className = {styles.sectionHeadText}>
          Work Experience 
        </h2>
      </motion.div>

      <div className = "mt-20 flex flex-col">
          <verticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key = {index} experience = {experience} /> 
            ))}
          </verticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Science, "work"); 