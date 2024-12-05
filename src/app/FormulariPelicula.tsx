'use client'
import React, { useState } from 'react'

export const FormularioPeliculas = () => {
  const [titulo, setTitulo]= useState("")
  const [director, setDirector] = useState("")
  const [duracion, setDuracion] = useState(0)
  const [salida, setSalida] = useState("")
  return (
    <>


      <p>titulo:{titulo}</p>
      <p>director:{director}</p>
      <p>duracion:{duracion}</p>
      <p>salida:{salida}</p>
      <hr/>
      <form>
        <label>titulo</label><br/>
        <input type="text" placeholder='ingrese el titulo' 
          onChange={(e)=> {setTitulo(e.currentTarget.value)}} /><br/>
        <label>director</label><br/>
        <input type="text" placeholder='ingrese el nombre del director' 
          onChange={(e)=> {setDirector(e.currentTarget.value)}} /><br/>
        <label>capitulos</label><br/>
        <input type="number" placeholder='ingrese la duracion' 
         onChange={(e)=> {setDirector(e.currentTarget.value)}} /><br/>
        <label>salida</label><br/>
        <input type="date" placeholder='ingrese en que fecha inicio la serie' 
        onChange={(e)=> {setSalida(e.currentTarget.value)}}/><br/> <br/>  
        <button type='button'>registrar</button>     

      </form>
    </>
  )
}
export default FormularioPeliculas