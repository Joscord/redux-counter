import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store';
import classes from './Counter.module.css'

export const Counter = () => {
	const { counter, showCounter } = useSelector(state => state);

	const dispatch = useDispatch();

  const { increment, decrement, toggle } = counterActions;

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
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<button onClick={() => incrementHandler()}>Increment</button>
      <button onClick={() => incrementHandler(5)}>Increase by 5</button>
			<button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};
