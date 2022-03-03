import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
  // Destructuramos showCounter de nuestro estado
	const { counter, showCounter } = useSelector(state => state);

	const dispatch = useDispatch();

	const incrementHandler = (value = 1) => {
    dispatch({type: 'INCREMENT', amount: value});
  };

	const decrementHandler = () => {
    dispatch({type: 'DECREMENT'});
  };

  // Definimos la función para manejar el contador
  const toggleCounterHandler = () => {
    // Despachamos una nueva acción Toggle
    dispatch({type: 'TOGGLE'});
  }

  // Añadimos un nuevo botón para manejar la visibilidad del Counter. Además renderizamos condicionalmente el contador
	return (
		<main>
			<h1>Redux Counter</h1>
			{showCounter && <div>{counter}</div>}
			<button onClick={() => incrementHandler()}>Increment</button>
      <button onClick={() => incrementHandler(5)}>Increase by 5</button>
			<button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};
