import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <h2>Home Page</h2>
            <Link to='/users' type="button">Go to users</Link>
        </div>
    )
}

export default Home;