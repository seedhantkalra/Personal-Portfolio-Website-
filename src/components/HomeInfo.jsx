import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent ={
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Seedhant</span> 👋
        <br />
            A Computer Science Student at the University of Waterloo 🪿
        </h1>
    ), 
    2: (
        <InfoBox 
            text="Worked with many companies and picked up many skills along the way."
            link="/about"
            btnText="Learn more"
            />
    ), 
    3: (
        <InfoBox 
            text="Led multiple projects to success over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ), 
    4: (
        <InfoBox 
            text="Looking to get in touch with me? I would be happy to have a chat! "
            link="/contact"
            btnText="Let's Talk!"
        />
    ),  
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo