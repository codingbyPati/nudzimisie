import React, {PropsWithChildren} from "react"
import "../styles.scss";
import banner from "../images/banner.jpg";
import Navbar from "../components/Navbar"
import ToysAnimation from "../components/SvgToys"


interface ILayout {

}

const Layout = ({children}:PropsWithChildren<ILayout>) => {
    return(
        <>
        
        <div className="background">
            <div className="width-1440">
                <header>
                    <Navbar/>
                </header>
                <div className="children-box">{children}</div>
               
                <div className="footer">
                    <img className="banner-box" src={banner}></img>
                </div>                
                
            </div>

        </div>
        <div style={{position:"relative"}}>
         <ToysAnimation/>
        </div>
       
        </>
    )
}

export default Layout