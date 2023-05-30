import React from 'react';
import "./servStyle.css"
import Deteccion from '../../../images/DeFrTrBa.jpg'
import Verificacion from '../../../images/VerificacionIdentidad.jpg'
import Supervision from '../../../images/SuperTrans.jpg'

export default function Services(){
    return (
        <>
            <div className="services">
                <h2 className="tittleS">Services</h2>
                <div className="deteccion">
                        <div className="image">
                            <img src={Deteccion} alt="Deteccion"/>
                        </div>
                        <h3 className="tittleDetec">Detección de Fraude de </h3>
                        <h3 className="tittleDetec">Transacciones Bancarias</h3>
                        <p className="text">Un servicio que detecta actividad fraudulenta en transacciones financieras realizadas a través de bancos y tarjetas de crédito.</p>
                        <button className="cta dete">
                            <span>More Info</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="verificacion">
                        <div className="image">
                            <img alt="verificacion" src={Verificacion}/>
                        </div>
                        <h3 className="tittleVerif">Verificación de</h3>
                        <h3 className="tittleV">Identidad</h3>
                        <p className="text">Un servicio que ayuda a identificar y verificar la identidad de los usuarios que realizan transacciones financieras en línea.</p>
                        <button className="cta veri">
                            <span>More Info</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="supervision">
                        <div className="image">
                            <img src={Supervision} alt="supervicion"/>
                        </div>
                        <h3 className="tittle">Supervisión de</h3>
                        <h3 className="tittle">Transacciones</h3>
                        <p className="text">Un servicio que supervisa y analiza todas las transacciones financieras, identificando actividades anormales y patrones de comportamiento inusuales.</p>
                        <button className="cta super">
                            <span>More Info</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
        </>
    )
}