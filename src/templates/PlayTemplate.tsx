import React from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"


const PlayTemplate = ({pageContext: {data}}) => {
    const { title, description, list } = data
    return  (
        <Layout>
            <div className="play-container">
                <div className="title-play">{title}</div>
                <div className="list-play">{list.map( item => <div key={item}>{item}</div>)}</div>
                <div className="description-play">{description.description}</div>
                <div className="btn-box">
              <Button type="draw">
              </Button>
            </div>
               
            </div>
         
           
        
        </Layout>
        
    )
        
    
}

export default PlayTemplate