import React from "react";
import Header from "../common/Header.tsx";

const Home  = ()=>{
    const Name  = "TWD'S"

    return(
        <div>
            <h1 className='text-5xl text-red-500'>waran inustries</h1>
            <h2>{Name}</h2>
            <Header />
        </div>
    )
}

export default Home;