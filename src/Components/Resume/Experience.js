import React from 'react'
import '../Resume/Experience.css'


const Experience = ({data}) => {
    
    return (
             
        <div>
            <div className="experience__card">
                <div className="position__title">
                    <h4>{data.Position}</h4>
                    <p>{data.CompanyName}|{data.Year}</p>
                </div>
                <div className="experience__description">
                    <ul>
                    {data.Challange.map((item,index)=>{
                        return(<li key ={index} >{item}</li>);
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
