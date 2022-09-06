import React from 'react'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {RiMessage3Fill} from 'react-icons/ri'
import {FaHtml5,FaCss3Alt,FaReact} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import {AboutYou,Skills,Review,Projects} from '../../Components/Content';
import Skillcard from './Skillcard'
import "./About.css"
import Button from '../Button'
import Reviewcard from './Reviewcard'
import Projectcard from './Projectcard'
import { CgHello } from 'react-icons/cg'



const About = () => {
    return (
        <>
        <div className="about__me">
        <div className="title__container">
            <div className="left__container">
                <h3>{AboutYou.name}</h3>
                <h6>{AboutYou.jobtitle}</h6>
                <p>{AboutYou.bigintro}</p>
                <div className="buttons">
                <NavLink to="/contact" className="Link">
                        <Button icon = {<CgHello/>} text = {"Hello"}/>
                </NavLink>
                <NavLink to="/portfolio" className="Link">
                        <Button icon={<AiOutlineFundProjectionScreen/>} text={"View Portfolio"}/>
                </NavLink>
                
                </div>
                
            </div>
            <div className="right__container">
                <img src="images/porfile.jpg" alt="profile-image" />
            </div>

        </div>
        <div className="skill__container">
            <h3>My Skills</h3>
            <p>I am a self taught developer who learned all these skills from online resources and by creating projects on all skills.I have created more than 50 projects of all type like Blog, E-commerce, Portfolio, Informatic Websites, Dashboards, etc. </p>
            <div className="skill__section">
                
                {
                    Skills.map((item,i)=>{
                        return( <Skillcard key={i} icon={item.reactIcon} skillname = {item.name} desc = {item.description} />);
                    })
                }
                
            </div>
            <div className="skillbtn">
                <NavLink to="/portfolio" className="Link">
                    <Button icon={<AiOutlineFundProjectionScreen/>} text={"View Portfolio"}/>
                </NavLink>
            </div>
            <div className="borderbottom"></div>
        </div>
        <div className="testimonial__section">
            <h3>Testimonials</h3>
            <div className="test__cards">

                {
                Review.map((testi,i)=>{
                    return(<Reviewcard key={i} quote={testi.quote} testiName={testi.testiName} companyName={testi.companyName} title={testi.title} />); 
                })
                }

            </div>
        </div>
        <div className="featured__project__section">
            <h3>Featured Projects</h3>
            <div className="featured__project">

                {
                    Projects.map((item,i)=>{
                        if(i<=3){
                            return(<Projectcard key={i} title={item.title} desc={item.description} />)
                        }
                    })
                }

            </div>
            <div className="skillbtn">
                <NavLink to="/contact" className="Link">
                        <Button icon={<RiMessage3Fill/>} text={"Lets Talk"}/>
                </NavLink>
            </div>
        </div>
        </div>
        </>
    )
}

export default About
