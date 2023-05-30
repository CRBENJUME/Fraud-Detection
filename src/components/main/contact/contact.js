import React from 'react';
import "./conStyle.css"

export default function Contact(){
    return (
        <>
            <div className="contact">
                    <div class="contact-form">
                        <span class="heading">Contact Us</span>
                        <form>
                            <label for="name">Name:</label>
                            <input type="text" required=""/>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required=""/>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required=""></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="info">
                        <h3 className="tittleI">Formulario de Contacto - Detección de Fraude en Transacciones Financieras</h3>
                        <p className="textI">Si necesita información sobre nuestro servicio de Detección de Fraude en Transacciones Financieras, 
                            complete el siguiente formulario de contacto para recibir asesoramiento
                        </p>
                    </div>
                </div>
        </>
    )
}