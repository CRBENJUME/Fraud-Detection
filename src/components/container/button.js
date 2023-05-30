import React from "react";
import "./buttonStyle.css"

export default function SignIn({props}){
    return (
        <>
            <button className="btn">
                <strong>{props}</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </button>
        </>
    )
}