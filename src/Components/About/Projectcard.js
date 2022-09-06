import React from 'react'
import '../About/Projectcard.css'

const Projectcard = ({title,desc}) => {
    return (
        <>
            <div className="project__container">
                <div className="left__container">
                    <img src="images/project.jpg" alt="project-image" />
                </div>
                <div className="right__container">
                    <h6> {title} </h6>
                    <p> {desc} </p>
                </div>
            </div>  
        </>
    )
}

export default Projectcard
