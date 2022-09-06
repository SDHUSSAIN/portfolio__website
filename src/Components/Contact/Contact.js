import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";
import '../Contact/Contact.css';
import {AiFillTwitterCircle,AiFillLinkedin, AiFillGithub, AiFillCodepenCircle} from 'react-icons/ai';
import { FaStackOverflow} from 'react-icons/fa';



const Contact = () => {
    const form = useRef();
    const { register, formState:{ errors }, handleSubmit } = useForm();

    
    
    const onSubmit = (data, e) => {
        e.preventDefault();
        sendEmail(e);
        console.log(data);
        e.target.reset();
        alert("Thanks for contacting  i will talk to shortly")
    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qtppm1j', 'template_qqnuepo', form.current, 'user_C536OZ3AdAQcbIBsZP5pg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    };

    
    
    
    
    return (
        <div>
            <div className="contact__page">
            <div className="contact__page__title">
                <h2>Contact</h2>
                <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an<br/> email to sdhussain498@gmail.com</p>

                <p>Want to get connected? Follow me on the social channels below.</p>
                <div className="social__icons">
                    <AiFillTwitterCircle className="social__icon"/>
                    <AiFillLinkedin className="social__icon"/>
                    <AiFillGithub className="social__icon"/>
                    <FaStackOverflow className="social__icon"/>
                    <AiFillCodepenCircle className="social__icon"/>

                </div>
            </div>
            <div className="contact__page__title">
                <h2>Get In Touch</h2>
            </div>
            
            <form ref={form} onSubmit={handleSubmit(onSubmit)}  className="form">
                <div className="form__input__container">
                <div className="name__phone__input">
                    <div className="name__input">
                        <input type="text" {...register("name", { required: "Name is required", minLength: 4 })} placeholder="  Enter Your Name"/>
                        
                        <ErrorMessage errors={errors} name="name" as="p" className="errormessage"/>

                    </div>
                    <div className="phone__input">
                        <input type="number" {...register("phone", { required: "Phone no is required", maxLength: 10 })} placeholder="  Enter Phone Number"/>
                        
                        <ErrorMessage errors={errors} name="phone" as="p" className="errormessage" />

                    </div>
                </div>
                <div className="email__input">
                    <input type="email" {...register("email", { required: "Email is required" })} placeholder="  Enter your e-mail"/>
                    
                    <ErrorMessage errors={errors} name="email" as="p" className="errormessage"/>
                </div>
                <div className="message__input">
                    <textarea rows="15" cols="80" type="text-area" {...register("message",{required:"Please write something"})}placeholder="Write your message here"/>
                    
                    <ErrorMessage errors={errors} name="message" as="p" className="errormessage" />
                </div>
                <input type="submit"  className="form__submit__btn"/>
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default Contact
