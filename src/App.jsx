import {  } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import  routes  from './routers/MainRoute'

function App() {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default App
