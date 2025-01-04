import React, { useRef, useState } from "react";
import './Navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll"; 
import logo from '../../Images/logo.jpg';
import underline from '../../Images/nav_underline.jpg';
import menu_open from '../../Images/menu_open.jpg';
import menu_close from '../../Images/menu_close.jpg'
// import { NavLink } from "react-router-dom";
function Navbar() {
  const[menu,setMenu] = useState('home')
  const menuRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }

  return( <div className="navbar">
<img className="logo-img" onClick={()=>setMenu("home")} src={logo} alt="myimage"/>
<img className="nav-mob-open" onClick={openMenu} src={menu_open} alt="" />
<ul ref={menuRef} className="nav-menu" >
    <img className="nav-mob-close" onClick={closeMenu} src={menu_close} alt="" />
    
    <li><AnchorLink className="anchor-link" href="#home" ><p onClick={()=>setMenu("home")}>Home</p ></AnchorLink>{menu==='home'?<img className="underline" src={underline} alt=""/>:<></>}</li>
    <li><AnchorLink className="anchor-link" offset={50} href="#about" ><p onClick={()=>setMenu("about")}>About Me</p ></AnchorLink>{menu==='about'?<img className="underline" src={underline} alt=""/>:<></>} </li>
    <li><AnchorLink className="anchor-link" offset={50} href="#services" ><p onClick={()=>setMenu("services")}>Services</p ></AnchorLink>{menu==='services'?<img className="underline" src={underline} alt=""/>:<></>}</li>
    <li><AnchorLink className="anchor-link" offset={50} href="#work" ><p onClick={()=>setMenu("work")}>Portfolio</p ></AnchorLink>{menu==='work'?<img className="underline" src={underline} alt=""/>:<></>}</li>
    <li><AnchorLink className="anchor-link" offset={50} href="#contact" ><p onClick={()=>setMenu("contact")}>Contact-us</p ></AnchorLink>{menu==='contact'?<img className="underline" src={underline} alt=""/>:<></>}</li>
</ul>
<div className="nav-connect" ><AnchorLink className="anchor-link" offset={50} href="#contact" ><p onClick={()=>setMenu("contact")}>Connect With me</p ></AnchorLink></div>
  </div>)
}
export default Navbar;
