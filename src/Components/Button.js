import React from 'react'

import './Button.css'


const Button = ({icon,text}) => {
    return (
        <>
        <a className="btn"> {icon} {text}</a>
            
        </>
    )
}

export default Button

