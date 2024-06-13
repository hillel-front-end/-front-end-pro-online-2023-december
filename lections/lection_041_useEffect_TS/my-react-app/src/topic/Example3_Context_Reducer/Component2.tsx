import Component3 from "./Component3.tsx";
import classes from "./Component.module.css";

const Component2 = () => {
    console.log('Component2');
    return (
        <div className={classes.block}>
            <h2>Hello from Component_2</h2>
            <Component3 />
        </div>
    )
}

export default Component2;