import { createBrowserRouter,} from "react-router-dom";
import Home from "./Home.tsx";
import Users from "./Users.tsx";
import User from "./User.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '/users/:id',
        element: <User />
    }
])

export default router;