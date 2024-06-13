import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

const Users = () => {
    const navigate = useNavigate();

    const handler = (id = 2) => {
        if (id) {
            navigate(`/users/${id}`);
        }
    };

    return (
        <div className='home'>
            <h2>Users Page</h2>
            <button onClick={() => handler(2)}>go to user</button>
        </div>
    )
}

export default Users;