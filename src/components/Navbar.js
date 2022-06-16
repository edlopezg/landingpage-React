import React from "react";
import './Navbar.css'


const Navbar = ({navbarLinks}) => {
    return (
        <nav className="navbar_nav">
              <span className="navbar_logo">TatooStudio </span>
               <ul className="navbar_list">
                   {navbarLinks.map((item) => {
                return (
                      <li className="navbar_item" key={item.title}>
                        <a className="navbar_link" href= {item.url}>{item.title}
                        </a>
                      </li>
                      );
            })} 
            </ul>
        </nav>
    )
}

export default Navbar;