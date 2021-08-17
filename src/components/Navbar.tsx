import * as React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import MenuIcon from '../images/menu.svg';
import {useState} from 'react';
import MobileMenu from '../components/MobileMenu'
import Close from '../images/close.svg'


const Navbar = ()=>{

  const [menuActive, setMenuActive] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }
    return(
        <>

        <div className="navbar">
            <div className="navbar-left">
                            <AnchorLink
                            className="logo"
                            to="/"
                            >
                            Nudzimisie.pl
                            </AnchorLink>  
            </div>
            <div className="navbar-right">
                            <AnchorLink
                            className="navbar-links"
                            to="/"
                            >
                            Losuj
                            </AnchorLink>
                            <AnchorLink
                            className="navbar-links"
                            to="/"
                            >
                            Lista zabaw
                            </AnchorLink>
                            <AnchorLink
                            className="navbar-links"
                            to="/"
                            >
                            O nas
                            </AnchorLink>
            
            </div>
           

        </div>
        <div className="mob-menu-bg">
                   <div className="mob-menu-logo">Nudzimisie.pl
                   </div> 
        </div>
        <div onClick={toggleMenu}>
              <img className="menu-icon" src={menuActive ? Close : MenuIcon} />
                  
        </div>
            <MobileMenu turnOffMenuFunc={toggleMenu} menuActive={menuActive}/> 
        





        </>
    )

    
}
export default Navbar