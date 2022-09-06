import React from 'react'
import {FiDownloadCloud} from "react-icons/fi"
import { AboutYou,ResumeExperience,ResumeSkill } from '../Content'
import Button from '../Button'
import '../Resume/Resume.css'
import Experience from './Experience'


const Resume = () => {
    return (
        <>
            <div className="resume__page">
                <div className="resume__container">
                    <h1>Online Resume</h1>
                    <Button icon={<FiDownloadCloud/>} text={"Download PDF"} />
                </div>
                <div className="resume__page__container">
                    <div className="resume__header">
                        <div className="resume__title">
                            <h2> {AboutYou.name} </h2>
                            <p> {AboutYou.jobtitle} </p>
                        </div>
                        <span></span>
                        <div className="resume__contacts">
                            <p> {AboutYou.phone} </p>
                            <p> {AboutYou.email} </p>
                            <p> {AboutYou.address} </p>
                            <p> {AboutYou.website} </p>
                        </div>
                    </div>
                    <span></span>
                    <div className="resume__intro__container">
                        <img src="images/porfile.jpg" alt="profile-jpg" />
                        <p>{AboutYou.bigintro}</p>
                    </div>
                    <span></span>
                    <div className="resume__body__container">
                        <div className="resume__experience">
                            {
                                ResumeExperience.map((item,i)=>{
                                    return (
                                    <Experience data={item} key={i}/>
                                    );
                                })
                            }
                        </div>
                        <div className="body__line"></div>
                        <div className="resume__skills">
                            
                            <h4>Technical</h4>
                            {
                                ResumeSkill.map((item,i)=>{
                                    return(<p key={i}>{item}</p>)
                                })
                            }
                            
                        </div>
                        
                    </div>
                    <span></span>


                </div>
            </div>
            
        </>
    )
}

export default Resume

