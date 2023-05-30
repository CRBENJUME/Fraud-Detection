import React from "react";
import "./sospStyle.css"

export default function Sosp(){
    return (
        <>
            <div className='sospechosas cardS'>  
                <div className="toolsS">
                     <div className="circleS">
                        <span className="redS boxS"></span>
                    </div>
                    <div className="circleS">
                        <span className="yellowS boxS"></span>
                    </div>
                    <div className="circleS">
                        <span className="greenS boxS"></span>
                    </div>
                </div>
                <div class="card__contentS"></div>
                <p className="title">95% de Efectividad</p>
                <p className="textH">Con el cual se detectaron 1259</p>
                <p className="textH">Transacciones sospechosas</p>
            </div>
        </>
    )
}