import React from 'react'
import '../Nav/nav.css'
import { CiUser } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
  return (
    <div>

  {/* ============large=================== */}
      <div className='mainnav'>
        <div className='leftnav'>
          <p id='logo'>BMC</p>
          <p>Pilots</p>
          <p>Ocassions</p>
        </div>
        <div className='rightnav'>
          <p>Projects</p>
          <p>Clients</p>
          <p id='contatc'>Contact<MdOutlineContactPhone /></p>
          <p><FaUser /></p>
        </div>
      </div>
{/* ===================small================= */}
      <div className='mainnav2'>
        <div className='leftnav'>
          <p id='logo'>BMC</p>
        </div>
        <div className='rightnav'>
          <p>Pilots</p>
          <p>Ocassions</p>
          <p id='nmenu'><GiHamburgerMenu />
            <div className='menu'>
              <p>Projects</p>
              <p>Clients</p>
              <p id='contatc'>Contact<MdOutlineContactPhone /></p>
              <p><FaUser /></p>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nav
