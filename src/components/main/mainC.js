import React from "react";
import Services from "./services/service";
import Contact from "./contact/contact";
import Description from "./descripcion/desc";
import About from "./about/about";

export default function MainContent(){
    return (
        <>
            <Description/>
            <Services/>
            <Contact/>
            <About/>
        </>
    )
}