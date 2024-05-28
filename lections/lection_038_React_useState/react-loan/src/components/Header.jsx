import Logo from "../assets/react.svg";
import classes from "./Header.module.css";

/*
    props = {
        a:"12",
        b: 13
        c: 'abc',
        toDo: () => log(..)
    }
*/
const Header = (props) => {
  console.log("----header----");
  return (
    <header className={`${classes.header} ${props.className}`}>
      <img src={Logo} alt="" className={classes.img} />
      <h1 className={classes.title}>Кредитний калькулятор</h1>
    </header>
  );
};

export default Header;
