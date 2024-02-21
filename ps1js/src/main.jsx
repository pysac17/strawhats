import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './pages/Store.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {store} from "../src/redux/store.js"
import { Provider } from 'react-redux'
import CategoryDetails from './pages/CategoryDetails.jsx';
import Navbar from './components/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/store",
    element: <Store/>,
  },
  {
    path: '/details',
    element: <CategoryDetails/>,
  },
  {
    path: '/navbar',
    element: <Navbar/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>

)
