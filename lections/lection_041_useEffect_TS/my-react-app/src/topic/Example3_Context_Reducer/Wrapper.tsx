import classes from './Component.module.css';
import {useModalCounterContext} from "./CounterContextProvider.tsx";
import Modal from "../Example2_styled-component.tsx";

const Wrapper = () => {
    const context = useModalCounterContext();

    const onCloseModal = () => {
        context.onToggleVisibility(false);
    }

    const onOpenModal = () => {
        context.onToggleVisibility(true);
    }

    const incrementCounter = () => {
        context.incrementCounter(1);
    }

    const decrementCounter = () => {
        context.decrementCounter(1);
    }

    return (
        <div className={classes.block}>
            <h2>Component Wrapper</h2>
            <button onClick={onOpenModal}>Open Modal</button>

            <Modal visible={context.visibility} onClose={onCloseModal}>

                <div>
                    <button onClick={incrementCounter}>+</button>
                    {context.counter}
                    <button onClick={decrementCounter}>-</button>
                </div>
            </Modal>

        </div>
    )
}

export default Wrapper;

// Redux, MobX