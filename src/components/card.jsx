import React from 'react'
import image from '../assets/500x325.png'

const Card = () => {
  return (
      <div class="card">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
              <h5 class="card-title">Título de la tarjeta</h5>
              <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
              <a href="#" class="btn btn-primary">Ir a algún lugar</a>
          </div>
      </div>
  )
}

export default Card