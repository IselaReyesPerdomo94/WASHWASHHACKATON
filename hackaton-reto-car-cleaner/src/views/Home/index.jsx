import React from "react";
import { MapComponent, Input, BoxWeather} from "../../components";
import {Link} from 'react-router-dom';
import logo from "../../images/logowash.png";
import "./style.css";

const Home = () => {


  return (
    <main>
      <section className="home">
          <div className="input-home">
            <img src={logo} alt="imagen-logo" />
            <Input type="text" placeholder="Escribe una dirección"/>
          </div>
        <BoxWeather />
        <MapComponent />
        <div className="button-container">
          <Link className="button button-service" to="/service">PEDIR SERVICIO</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
