import Component2 from "./Component2.tsx";
import classes from "./Component.module.css";

const Component1 = () => {
    console.log('Component1');
    return (
        <div className={classes.block}>
            <h2>Hello from Component_1</h2>
            <Component2  />
        </div>
    )
}

export default Component1