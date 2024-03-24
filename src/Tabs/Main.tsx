import React from "react"
import Home from './Home.tsx'
import Gallery from "./Gallery.tsx"
import Softwares from "./Softwares.tsx"
import About from "./About.tsx"

const Main = ()=>{
    return(
        <div>
            <Home />
            <Gallery />
            <Softwares />
            <About />
        </div>
    )
}

export default Main