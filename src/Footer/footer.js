import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../Footer/footer.css'

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";



const Footer = () => {
    return (
        <div>
            <div className='mainfooter'>
                <div>
                    <p id='logofooter'>BMC</p>
                    <ul className='footerlist'>
                        <li>Pilots</li>
                        <li>Ocassions</li>
                        <li>Clients</li>
                        <li>Projects</li>
                    </ul>
                    <p id='copy'>Copyright BMC@2024</p>
                </div>

                <div className='headcenter'>
                    <div id='footercenter'>
                        <p><FaLocationDot /></p>
                        <p id='copyright'>Port Harcourt, Nigeria</p>
                    </div>

                    <div id='footercenter'>
                        <p><FaPhoneAlt /></p>
                        <p id='copyright'>801081817276</p>
                    </div>

                    <div id='footercenter'>
                        <p><IoMdMail /></p>
                        <p id='copyright'>BMC@gmail.com</p>
                    </div>
                </div>

            <div>
                <div  className='about'>
                    <h1>About the company</h1>
                    <p id='copyright'>fghh jhjfj kdjjh jhjh jhjhfffhfhjfh jfhjgfh jgf hjgfhjgfhjgf hjgfhjg</p>
                </div> 

                <div id='socials'>
                    <p><FaSquareTwitter /></p>
                    <p><FaSquareXTwitter /></p>
                    <p><FaFacebookSquare /></p>
                    <p><FaSquareInstagram /></p>
                </div>
            </div>
            </div>
            <p id='copyright2'>Copyright BMC@2024</p>
        </div>
    )
}

export default Footer
