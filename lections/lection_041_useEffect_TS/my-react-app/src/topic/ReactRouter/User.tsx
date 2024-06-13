import {useParams} from "react-router-dom";
import {useEffect} from "react";

const User = () => {
    const params: any = useParams();
    console.log(params);

    useEffect(() => {
    ///load user by id
    }, [params.id]);


    return (
        <div className='user'>
            <h2>User Page {params.id} </h2>
        </div>
    )
}

export default User;