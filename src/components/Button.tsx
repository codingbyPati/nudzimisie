import React from "react"
import {PropsWithChildren} from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import RightArrow from '../images/right-arrow.svg'
import LeftArrow from '../images/left-arrow.svg'

interface IButtonProps{
    type:string
}


const Button =(props:PropsWithChildren<IButtonProps>) =>{
    const {type, children} = props; 
    return( 
        <div>
        {type === "draw" &&
        <AnchorLink 
            className="button" to="/">
            Losuj
        </AnchorLink>} 
        
        {type === 'next' &&
       <AnchorLink
            className="button" to="/">
            Następny
            <img src={RightArrow} className="r-arrow"></img>
        </AnchorLink>}
     
        {type === 'previous' &&
        <AnchorLink 
            className="button " to="/">
            <img src={LeftArrow} className="l-arrow"></img>
            Poprzedni
        </AnchorLink>}
        </div>
     



    )
}

export default Button;