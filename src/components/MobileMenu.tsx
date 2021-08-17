import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';

interface IMobileMenu {
    turnOffMenuFunc: any
    menuActive:boolean
}

const MobileMenu  =({turnOffMenuFunc, menuActive}:IMobileMenu) => {
    return(
        <div className={"mobile-menu-bg " + (menuActive === true ? "transform-1" : "transform-0")}>
            <div className="links-wrapper">
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
         
        </div>

    )
        
      
}

export default MobileMenu;