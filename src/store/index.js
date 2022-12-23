import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
	showCounter: true,
};

const counterReducer = (state = initialState, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === 'toggle') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	} else {
		return state;
	}
};

const store = createStore(counterReducer);

export default store;
