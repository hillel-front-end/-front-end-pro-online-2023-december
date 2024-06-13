import classes from "./Component.module.css";
import { useModalCounterContext } from './CounterContextProvider.tsx';

const Component3 = () => {
    console.log('Component3');
    const { counter, incrementCounter } = useModalCounterContext();

    const incCounterHandler = () => {
        incrementCounter(1)
    }

    return (
        <div className={classes.block}>
            <h2>Hello from Component_3</h2>
            <button onClick={incCounterHandler}>Hello from Component_3</button>
            <br/>
            Counter = {counter}
            <button onClick={incCounterHandler}>+</button>
        </div>
    )
}

export default Component3;