import React from "react";
import "./style.css";
import {Link} from 'react-router-dom'

import HeaderModal from '../../components/HeaderModal'

const Select = ({name, value, handleClickSelect}) =>{
   return (   
            <div className="layer select-div">  
                  <section className="modal-confirmation text">
                        <HeaderModal /> 
                           <p class="txt-confirm">Tonala 10, Del. Cuauhtémoc</p>
                           <p class ="txt-confirm">Elige las características de tu coche:</p>
                        
                     <section className="selects">
                        Marca:
                        <select 
                           className="select"
                           name={name}
                           value={value}
                           /> 
                        Modelo:   
                        <select 
                           className="select"
                           name={name}
                           value={value}
                           /> 
                        Color:   
                        <select 
                           className="select"
                           name={name}
                           value={value}
                           /> 
                     </section>
                     <section className="input-placa">
                        <input type="text" className="placas" placeholder="Placa No."></input>
                     </section>
                     <Link to="/creditCard"  className="button">Siguiente</Link>
               </section>
         </div> 
   )
}
export default Select;