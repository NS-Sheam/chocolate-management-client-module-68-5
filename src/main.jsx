import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllChocolates from './pages/AllChocolates/AllChocolates.jsx';
import Main from './layouts/Main.jsx';
import AddChocolate from './pages/AddChocolate/AddChocolate.jsx';
import EditChocolate from './pages/EditChocolate/EditChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "chocolates",
        element: <AllChocolates></AllChocolates>,
        loader: () => fetch("https://chocolate-house-server-ns-sheam.vercel.app/chocolates")
      },
      {
        path: "addChocolate",
        element: <AddChocolate></AddChocolate>
      },
      {
        path: "/chocolates/:id",
        element: <EditChocolate></EditChocolate>,
        loader: ({params}) => fetch(`https://chocolate-house-server-ns-sheam.vercel.app/chocolates/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
