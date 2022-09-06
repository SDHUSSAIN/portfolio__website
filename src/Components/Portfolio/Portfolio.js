import React from 'react'
import { CgHello } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import {Projects} from '../../Components/Content';
import Projectcard from '../About/Projectcard'
import Button from '../Button'
import '../Portfolio/Portfolio.css'

const Portfolio = () => {
    return (
        <>
        <div className="portfolio__page">
            <div className="portfolio__title">
                <h2>Portfolio</h2>
                <p>Welcome to my online portfolio. Here are some of my projects which i have built through my <br /> journey to become developer which have shaped my knowledge base and sometime challanged me.</p>
                <NavLink to="/contact" className="Link">
                        <Button icon = {<CgHello/>} text = {"Hello"}/>
                </NavLink>
            </div>
            <h2>All Projects</h2>

            <div className="allprojects">
                {
                    Projects.map((item,i)=>{
                        
                    return(<Projectcard key={i} title={item.title} desc={item.description} />)
                        
                    })
                }
                
            </div>
            </div>
        </>
    )
}

export default Portfolio
