import React from 'react';
import {Button, HeaderModal} from '../index';
import {Link} from 'react-router-dom';

import './style.css';

const Confirmation = ({washType, address, car, cost}) => {
    
    return(
        <div className="layer">
            <article className="modal-confirmation">
                <HeaderModal/>
                <p>{washType}</p>
                <p>{address}</p>
                <p>{car}</p>
                <p>Costo: $<span>{cost}</span></p>
                <a>¿Algún objeto para documentar?</a>
                <Link to="/rank" className="button">Confirmar</Link>
            </article>
        </div>
    )
}

export default Confirmation;