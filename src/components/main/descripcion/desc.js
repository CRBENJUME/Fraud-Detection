import React from 'react'
import "./descStyle.css"

export default function Description(){
    return (
        <>
            <div className="description">
                    <h1 className="tittleD">Fraud Detection</h1>
                    <p className="textD">Fraud Detection: Nuestra empresa en San Luis Potosi, 
                        ofrece un servicio de detección de fraude en transacciones financieras. 
                        Estamos comprometidos a ayudar a nuestros clientes a prevenir el fraude
                        y reducir los riesgos de seguridad.
                    </p>
                    <button className="contactButton"> Contact
                        <div className="iconButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                        </div>
                    </button>
                </div>
        </>
    )
}