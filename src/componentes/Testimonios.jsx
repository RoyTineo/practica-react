import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonios (props) {
	return(
		<div className="contenedor-testimonio">
			<img className="imagen-testimonio" src={require(`../img/${props.imagen}.jpg`)} alt="Foto de Susan" />
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio">{props.nombre} </p>
				<p className="lugar-testimonio">{props.lugar}</p>
				<p className="descripcion-testimonio">{props.descripcion}</p>
			</div>
		</div>
	)
}

export default Testimonios;