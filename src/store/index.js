import { createStore } from 'redux';

// Modificamos el estado inicial añadiendo una nueva propiedad
const initialState = {
	counter: 0,
    showCounter: true
};
// Modificamos la función reducer, usando ... para mantener las propiedad que no deseamos variar
const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return {
            ...state,
			counter: state.counter + action.amount,
		};
	}

	if (action.type === 'DECREMENT') {
		return {
            ...state,
			counter: --state.counter,
		};
	}

    if (action.type === 'TOGGLE') {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }

	return state;
};

const store = createStore(counterReducer);

export default store;
