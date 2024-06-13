import Component1 from "./Component1.tsx";
import Wrapper from "./Wrapper.tsx";
import classes from './Component.module.css';
import ModalCounterProvider from "./CounterContextProvider.tsx";

const Example3 = () => {
    return <>
        <div className={classes.block}>
            <h2>Parent </h2>
            <ModalCounterProvider>
                <Component1 />
                <Wrapper />
            </ModalCounterProvider>
        </div>
    </>
}


export default Example3