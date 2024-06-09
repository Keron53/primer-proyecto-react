import React from 'react'
import PropTypes from 'prop-types'

// Hacerlo sin necesidad de defaultProps
//export const Props = ({titulo, subtitulo = 'Seccion de Props'})

export const Props = ({titulo, subtitulo}) => {
//    console.log(titulo)
 //   console.log(subtitulo)
  return (
    <>
        <h1> {titulo} </h1>
        <h2> {subtitulo + 1} </h2>
    </>
  )
}

Props.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo:  PropTypes.string.isRequired
}

Props.defaultProps = {
    titulo: 'Curso de REACT',
    subtitulo: 'Seccion de Props'
}