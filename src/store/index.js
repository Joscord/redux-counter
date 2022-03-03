import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state) {
            state.counter--
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
});

// Podemos obtener un objeto de acciones. Este objeto contiene métodos creadores de acciones que ya vienen con un identificador único
export const counterActions = counterSlice.actions;

export default store;
