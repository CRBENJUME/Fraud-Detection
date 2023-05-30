import React from "react";
import SignIn from "./button";
import "./contentStyle.css"

export default function Container(){
    return(
        <>
            <div className="container">
                <p>Fraud Detection</p>
                <SignIn props={"Sign In"}/>
            </div>
        </>
    )
}