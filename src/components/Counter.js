import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch({ type: 'toggle', showCounter: !showCounter });
	};

	const addCounter = () => {
		dispatch({ type: 'increment' });
	};

	const subCounter = () => {
		dispatch({ type: 'decrement' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{showCounter && counter}</div>
			<div>
				<button onClick={addCounter}>+</button>
				<button onClick={subCounter}>-</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
