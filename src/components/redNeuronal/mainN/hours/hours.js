import React from "react";
import "./hourStyle.css"

export default function Hours(){
    return (
        <>
            <div className='hours cardH'>
                <div className="toolsH">
                    <div className="circleH">
                        <span className="redH boxH"></span>
                    </div>
                    <div className="circleH">
                        <span className="yellowH boxH"></span>
                    </div>
                    <div className="circleH">
                        <span className="greenH boxH"></span>
                    </div>
                </div>
                <div class="card__contentH"></div>
                <p className="title">1259</p>
                <p className="textH">Transacciones Sospechosas</p>
                <p className="textH">en las ultimas 24 horas</p>
            </div>
        </>
    )
}