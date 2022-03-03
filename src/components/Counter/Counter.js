import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

  // Modificaremos esta función pasando un valor por default de 1 en caso de que no  pasemos ningún parámetro.
	const incrementHandler = (value = 1) => {
    // Añadimos un payload a la acción, es decir, transportará un valor. El payload puede tener el nombre que nosotros queramos
    dispatch({type: 'INCREMENT', amount: value});
  };

	const decrementHandler = () => {
    dispatch({type: 'DECREMENT'});
  };

  // Nótese que la forma en que referenciamos las funciones, dado que ahora tienen parámetros, es a través de una función anónima
	return (
		<main>
			<h1>Redux Counter</h1>
			<div>{counter}</div>
			<button onClick={() => incrementHandler()}>Increment</button>
      <button onClick={() => incrementHandler(5)}>Increase by 5</button>
			<button onClick={decrementHandler}>Decrement</button>
		</main>
	);
};
