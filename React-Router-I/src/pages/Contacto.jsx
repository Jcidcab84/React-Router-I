import React from 'react'

const Contacto = () => {
  return (
    <>
    <div className='contactContent'>
    <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
   <label className='fs-4'>Correo:</label>
   <input className='form-control' type="email" placeholder='name@example.com' />
   <label className='fs-4'>Descripción</label>
   <textarea className='form-control' name="" id="" cols="30" rows="10"></textarea>
   <button className='btn btn-danger'>Enviar</button>
   </div>
  </>
  )
}

export default Contacto