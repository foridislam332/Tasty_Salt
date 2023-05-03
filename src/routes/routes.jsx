import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ChefRecipes from "../pages/ChefRecipes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/chef')
            },
            {
                path: '/chef/:id',
                element: <ChefRecipes />,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
]);

export default routes;