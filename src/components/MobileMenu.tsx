import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';
import {useState} from 'react';

interface IMobileMenu {
    turnOffMenuFunc: any
}

const MobileMenu  =({turnOffMenuFunc}:IMobileMenu) => {
    return(
        <div className="mobile-menu-bg">
            <AnchorLink
            onAnchorLinkClick={turnOffMenuFunc}
            className="mobile-links"
            to=""
            >
            Home
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to=""
            >
            Losuj
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to=""
            >
            Lista zabaw
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to=""
            >
            O nas
            </AnchorLink>
        </div>

    )
        
      
}

export default MobileMenu;