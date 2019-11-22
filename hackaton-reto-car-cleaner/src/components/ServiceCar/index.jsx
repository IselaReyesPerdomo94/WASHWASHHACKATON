import React from 'react';
import {Button} from '../index';
import{Link} from 'react-router-dom'
import "./style.css";

const ServiceCar = ({handleClickServiceCar}) =>{

    return(
        <section className = "layer">
            <section className= "modal-confirmation contentServiceCar">
                    <p>Tu coche esta en...</p>
                <h5>Tonala 10, Roma norte Delegación Benito Juarez</h5>

                <section className = "contentButton">
                    <button className = "buttonServiceCar">Calle</button>
                    <button className = "buttonServiceCar">Domicilio</button>
                </section>
                
                <p>Selecciona tu paquete</p>

                <section className = "contentButton">
                    <section className = "contentButtonserviceCar2">
                        <button className = "buttonServiceCar2">LAVADO EXPRESS</button>
                        <a className = "enlaceServiceCar"href="#">Mas info</a>
                    </section>
                
                    <section className = "contentButtonserviceCar2">
                        <button className = "buttonServiceCar2">LAVADO COMPLETO</button>
                        <a className = "enlaceServiceCar"  href="#">Mas info</a>
                    </section>

                    <section className = "contentButtonserviceCar2">
                        <button className = "buttonServiceCar2">LAVADO MENSUAL</button>
                        <a className = "enlaceServiceCar" href="#">Mas info</a>
                    </section>
                </section>
                <Link to="information" className="button">Siguiente</Link>
            </section>
        </section>
    )




}



export default ServiceCar