import React from 'react'
import { FaUserAlt} from 'react-icons/fa';
import "./Navitems.css"


function Navitems({icon,text}) {
    return (
        <>
            <div className="navitems">
                {icon}
                <h3>{text}</h3>
            </div>  
        </>
    )
}

export default Navitems
