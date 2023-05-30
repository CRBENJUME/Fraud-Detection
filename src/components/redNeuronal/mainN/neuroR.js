import React from "react";
import Grafica from "./grafica/grafica";
import Total from "./total/total";
import Sosp from "./sospechosas/sosp";
import Hours from "./hours/hours";
import FileComp from "./file/file";
import "./neuroStyle.css"

export default function NeuroRed(){
    return (
        <>
            <div className="neuro">
                <Grafica/>
                <Total/>
                <Sosp/>
                <Hours/>
                <FileComp/>
            </div>
        </>
    )
}