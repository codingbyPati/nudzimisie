import React from "react"
import "../styles.scss"
import Layout from "../components/Layout"
import Button from "../components/Button"

const IndexPage = () => (
    <Layout>
          <div className="content-box">
            <div className="text-box"> Jesteś rodzicem i nie masz pomysłów na zabawę? Mamy dla ciebie worek pomysłów! Wystarczy tylko jedno kliknięcie...Zaczynajmy!</div>
            <div className="btn-box">
              <Button type="draw">
              </Button>
            </div>
          </div>
         
        

    </Layout>
)

export default IndexPage
