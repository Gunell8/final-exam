import { AddProduct } from "../Pages/AddProduct/AddProduct";
import { Detail } from "../Pages/Detail/Detail";
import { Home } from "../Pages/Home/Home";
import { MainRoot } from "../Pages/MainRoot/MainRoot";
export const Routes=[
    {
      path:"",
      element:<MainRoot/>,
      children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"/add",
            element:<AddProduct/>
        },
        {
            path:"/:id",
            element:<Detail/>
        }
      ]
    }
]