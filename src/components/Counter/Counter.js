import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// importamos las acciones
import { counterActions } from '../../store';

export const Counter = () => {
	const { counter, showCounter } = useSelector(state => state);

	const dispatch = useDispatch();

  // Destructuramos las acciones
  const { increment, decrement, toggle } = counterActions;

  // Despachamos las diferentes acciones accediendo a ellas a través del objeto de acciones y los métodos creadores de acciones
  // Notemos que el payload se pasa a la función como argumento. Cuando la función cree la acción además de tener un identificador único tendrá una propiedad payload que almacena este valor
	const incrementHandler = (value = 1) => {
    dispatch(increment(value));
  };

	const decrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(toggle());
  }

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
