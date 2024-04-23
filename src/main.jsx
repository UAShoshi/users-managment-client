import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Users from './Users.jsx';
// import User from './User.jsx';
// import Root from './Root.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/users",
//         element: <Users></Users>,
//         loader: () => fetch('http://localhost:5000/users')
//       },
//       {
//         path: "/user/:id",
//         element: <User></User>,
//         loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
