// Importamos la función para crear el store de redux
import { createStore } from 'redux';

// Estado inicial
const initialState = {
    counter: 0
};

// Definimos la función reductora. Pasamos como parámetro por defecto el estado inicial, así la primera vez que se ejecuta la función el estado se crea con un valor y no es indefinido
const counterReducer = (state = initialState, action) => {
    // Manejamos las diferentes acciones
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter++
        }
    };

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter--
        }
    };

    return state;
}

// Creamos el store, debemos pasar la función reductora como parámetro
const store = createStore(counterReducer);

// Exportamos el store
export default store;  