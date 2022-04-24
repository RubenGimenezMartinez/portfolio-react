import React from 'react';
import './../Styles/BotonesAnimados.css'

function BotonesAnimados() {
  return (
    <>
      <button className='boton-anim top-down'><span>Botón</span></button>
      <button className='boton-anim lef-right-clip'><span>Botón</span></button>
      <button className='boton-anim top-down-circular'><span>Botón</span></button>
      <button className='boton-anim inner-circular'><span>Botón</span></button>

      <button className='boton-anim push-icon'>
				<div className='icono'>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<span>Botón</span>
			</button>

    <button className='boton-anim border'>
				<span>Botón</span>
				<svg>
					<rect x="0" y="0" fill="none"></rect>
				</svg>
			</button>

    </>
  );
}

export default BotonesAnimados;
