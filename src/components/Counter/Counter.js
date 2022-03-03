import React from 'react'
// Importamos un hook useSelector que nos permite acceder al estado del store
import { useSelector } from 'react-redux'

export const Counter = () => {
    // usamos el hook useSelector, que recibe como parámetro una función que se ejecuta por react-redux y que determina qué pieza de dato queremos extraer del store. La función recibe el estado y retorna la parte del estado qué necesitamos. Al usar este hook redux automáticametne establece una suscripción desde este componente al store, así el componente se actualizará automáticamente si la data cambia en el store. También si el componente se desmonta redux automáticamente limpia la suscripción
    const counter = useSelector(state => state.counter);



  return (
    <main>
        <h1>Redux Counter</h1>
        <div>{counter}</div>
    </main>
  )
}
