import React from "react"
import ball from "../images/ball.svg"
import rabbit from "../images/rabbit.svg"
import rockingHorse from "../images/rocking-horse.svg"
import rubberDuck from "../images/rubber-duck.svg"
import stegosaurus from "../images/stegosaurus.svg"
import teddyBear from "../images/teddy-bear.svg"
import toy from "../images/toy.svg"
import toys from "../images/toys.svg"

const toysList = [
    {id: 1, image:ball,top:"100px", left:"2%", right:"unset", width:"80px",animationDelay:"-2.5s"},
    {id: 2, image:rabbit,   top:"250px", left:"4%", right:"unset", width:"80px", animationDelay:"-1s"},
    {id: 3, image:rockingHorse,   top:"400px", left:"2%",right:"unset", width:"80px",animationDelay:"-1.5s"},
    {id: 4, image:rubberDuck,  top:"550px", left:"4%", right:"unset",  width:"80px", animationDelay:"-2s"},
    {id: 5, image:stegosaurus, top:"100px", right:"2%",left:"unset", width:"80px",animationDelay:"-1.5s"},
    {id: 6, image:teddyBear,  top:"250px", right:"4%", left:"unset",  width:"80px", animationDelay:"-2s"},
    {id: 7, image:toy,  top:"400px", right:"2%", left:"unset",  width:"80px",animationDelay:"-2.5s"},
    {id: 8, image:toys,  top:"550px", right:"4%", left:"unset",  width:"80px",animationDelay:"-1s"},
    
  ]

  const ToysAnimation = ({ }) => {
    return (
        <>
        {toysList.map(s =>  
            <div style={{position:"fixed", width:"100%", top:"0", left:"0"}}>
                <img className="toy-animate" src={s.image} style={{top:s.top, left:s.left, right:s.right, width:s.width, animationDelay:s.animationDelay,position:"absolute"}} ></img>
            </div>                   
           
       
        )}
       </>
    );
  }
  
  export default ToysAnimation;