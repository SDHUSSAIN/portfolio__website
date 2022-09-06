import React from 'react'

import './Skillcard.css'
const Skillcard = ({icon,skillname,desc}) => {
    return (
        <>
            <div className="skillcard">
                {icon}
                {/* <IoLogoJavascript className="skill__icon__style"/> */}
                <h4> {skillname} </h4>
                <p> {desc} </p>
            </div>
            
        </>
    )
}
export default Skillcard
