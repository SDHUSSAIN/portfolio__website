import React from 'react'
import Button from '../Button'
import Navitems from './Navitems'
import { NavLink } from "react-router-dom";
import {AboutYou} from '../../Components/Content';
import './Sidebar.css'
import {AiFillTwitterCircle,AiFillLinkedin, AiFillGithub, AiFillCodepenCircle} from 'react-icons/ai'
import { FaStackOverflow, FaUserAlt,FaLaptopCode } from 'react-icons/fa'
import {VscColorMode} from 'react-icons/vsc'
import {FcDocument} from 'react-icons/fc'
import {MdEmail} from 'react-icons/md'
import { CgHello } from 'react-icons/cg';

const Sidebar = () => {

    
    return (
        <>
            <div className="sidebar">
                <h2>{AboutYou.name}</h2>
                <img src="images/porfile.jpg" alt="profile-img" />
                <p>{AboutYou.shortintro}</p>
                <div className="social__icons">
                <AiFillTwitterCircle className="social__icon"/>
                <AiFillLinkedin className="social__icon"/>
                <AiFillGithub className="social__icon"/>
                <FaStackOverflow className="social__icon"/>
                <AiFillCodepenCircle className="social__icon"/>

                </div>
                <span></span>
                <div className="navbar">
                    <NavLink to="/" className="Link">
                        <Navitems icon={<FaUserAlt/>} text={"About Me"}/>
                    </NavLink>
                    <NavLink to="/portfolio" className="Link">
                        <Navitems icon={<FaLaptopCode/>} text={"Portfolio"}/>
                    </NavLink>
                    <NavLink to="/contact" className="Link">
                        <Navitems icon={<MdEmail/>} text={"Contact"}/>
                    </NavLink>
                    <NavLink to="/resume" className="Link">
                        <Navitems icon={<FcDocument/>} text={"Resume"}/>
                    </NavLink>
                    <NavLink to="/contact" className="Link">
                        <Button icon = {<CgHello/>} text = {"Hello"}/>
                    </NavLink>
                    
                </div>
                <span></span>
                
                <div className="switch__container">
                    <h2>
                        <VscColorMode/> Dark Mode
                    </h2>
                    <div className="switch__container">
	                    <input type="checkbox" id="toggle"/>
	                    <label for="toggle"></label>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Sidebar
