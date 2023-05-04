import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ChefRecipes from "../pages/ChefRecipes";
import Register from "../pages/Register";
import Login from "../pages/Login";
import EditProfile from "../components/EditProfile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://tasty-salt-server-foridislam332.vercel.app/chef')
            },
            {
                path: '/chef/:id',
                element: <ChefRecipes />,
                loader: ({ params }) => fetch(`https://tasty-salt-server-foridislam332.vercel.app/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/edit',
                element: <EditProfile />
            }
        ]
    }
]);

export default routes;