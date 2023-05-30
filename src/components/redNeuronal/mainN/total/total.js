import React from "react";
import "./totalStyle.css"

export default function Total(){
    const total = () =>{
        const files = 26000
        return files
    }
    return (
        <>
            <div className='total cardT'>
                    <div className="toolsT">
                        <div className="circleT">
                            <span className="redT boxT"></span>
                        </div>
                        <div className="circleT">
                         <span className="yellowT boxT"></span>
                        </div>
                        <div className="circleT">
                            <span className="greenT boxT"></span>
                        </div>
                    </div>
                    <div class="card__contentT"></div>
                    <p className="title">{total()}</p>
                    <p className="textH">Transacciones Evaluadas</p>
                </div>
        </>
    )
}