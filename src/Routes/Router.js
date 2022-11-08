import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/Pages/AddService/AddService";
import Blog from "../Components/Pages/Blog/Blog";
import AllServices from "../Components/Pages/Home/AllServices/AllServices";
import Home from "../Components/Pages/Home/Home/Home";
import ServicesDetails from "../Components/Pages/Home/ServicesDetails/ServicesDetails";
import Login from "../Components/Pages/Login/Login";
import MyReview from "../Components/Pages/MyReview/MyReview";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layout/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('https://fakestoreapi.com/products'),  
            },
            {
                path: '/home',
                element: <Home></Home>,
                // loader: ()=> fetch('https://fakestoreapi.com/products'),
            },
            {
                path: '/addservice',
                element: <PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>,
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/service/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({params})=>{
                 return   fetch(`http://localhost:5000/service/${params.id}`)
                }

               
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>

            },

        ],
    },
 
]);

export default router;
