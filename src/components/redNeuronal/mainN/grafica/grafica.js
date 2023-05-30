import React from "react";
import PiesChart from "../../../PiesChart";
import "./grafStyle.css"

export default function Grafica(){
    return (
        <>
            <div className="graph cardG">
                    <div class="toolsG">
                        <div class="circleG">
                        <span class="redG boxG"></span>
                        </div>
                        <div class="circleG">
                        <span class="yellowG boxG"></span>
                        </div>
                        <div class="circleG">
                        <span class="greenG boxG"></span>
                        </div>
                    </div>
                    <div class="card__contentG">
                    </div>
                    <p className="textG">Grafica de Transacciones</p>
                    <p className="textG2">Financieras</p>
                    <div className="bg-light mx-auto border border-2 border-primary" style={{width:"400px", height:"250px"}}>
                        <div style={{width:"100%", height:"100%"}}>
                            <PiesChart />                       
                        </div>
                    </div>
                </div>
        </>
    )
}