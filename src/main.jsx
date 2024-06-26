import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Features from './Pages/Features/Features.jsx'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import AutoLayout from './Pages/AutoLayout.jsx'
import Home from './Pages/Home.jsx'
import StorePart from './Components/StorePart/StorePart.jsx'
import Post from './Pages/Post/Post.jsx'
import Error from './Pages/ErrrorPage/Error.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route
      element={<AutoLayout />}>
      <Route index element={<Home />} ></Route>
      <Route path='Features' element={<Features />} ></Route>
      <Route path='Post' element={<Post />} ></Route>
      <Route path='Error' element={<Error />} ></Route>
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
