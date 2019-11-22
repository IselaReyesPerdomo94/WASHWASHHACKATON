import React from 'react';
import {Button} from '../index';
import "./style.css";

const ServiceCar = () =>{

    return(
        <section className = "layer">
            <section className= "modal-confirmation contentServiceCar">
                    <p>Tu coche esta en...</p>
                <h5>Angus Dr. #2, Delegación Benito Juarez</h5>

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
                <Button text="Siguiente" />
            </section>
        </section>
    )




}



export default ServiceCar