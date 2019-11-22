import React from 'react';
import ReactStars from 'react-stars';
import { render } from 'react-dom';
import './style.css';

const RankUser = () => {
	return (
		<section className="rank-opinion-container">
			<div className="rank-container">
				<figure className="photo-stars">
					<img src="" alt="foto de Empleado" />
                    <h6>Jorge Molina</h6>
					<ReactStars count={5} size={24} color2={'#ffd700'} />
				</figure>
				<article className="opinion-user">
					<h3>Tu opinión es importante:</h3>
					<h5>Lavado Express</h5>
					<p>
						Jorge Molina realizó tu wash. Déjanos un comentario y califica el servicio 
                        ¡Nos interesa tú opinión!
					</p>
					<input type="text" className="placas" placeholder="Escribe tu opinión aquí." />
				</article>
			</div>
			<div>
				<input className="button button-car" value="OK" />
			</div>
		</section>
	);
};

export default RankUser;
