import React from 'react'
import '../About/Reviewcard.css'

const Reviewcard = ({quote,testiName,title,companyName}) => {
    return (
        <>
            <div className="test__card__container">
                <img src="images/porfile.jpg" alt="profile-img" />
                <p>{quote}</p>
                <span></span>
                <h6> {testiName} </h6>
                <p>{title}{"-"}{companyName}</p>
            </div>  
        </>
    )
}

export default Reviewcard
