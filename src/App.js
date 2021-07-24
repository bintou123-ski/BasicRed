import "./index.css"
import React from 'react'
import  Navbar from  "./Navbar"
import Home from "./Home";
//import Contact from "./Contact"

export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
              <Home/>
            </div>   
        </div>
    )
}
