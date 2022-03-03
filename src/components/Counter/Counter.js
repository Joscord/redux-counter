import React from 'react';
// importamos otro hook, useDispatch que nos devuelve una función para despachar acciones
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	// Definimos dos nuevas funciones para incrementar o reducir el contador
	const incrementHandler = () => {
    dispatch({type: 'INCREMENT'});
  };

	const decrementHandler = () => {
    dispatch({type: 'DECREMENT'});
  };

	return (
		<main>
			<h1>Redux Counter</h1>
			<div>{counter}</div>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
		</main>
	);
};
