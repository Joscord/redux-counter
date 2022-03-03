import { createStore } from 'redux';

const initialState = {
	counter: 0,
};

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return {
            // Esta vez retornamos el objeto pero le sumamos a counter lo que viene en el payload de la acción (1 o 5)
			counter: state.counter + action.amount,
		};
	}

	if (action.type === 'DECREMENT') {
		return {
			counter: --state.counter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
