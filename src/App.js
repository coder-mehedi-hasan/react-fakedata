import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Notfound from './components/Notfound/Notfound';
import Main from './layout/Main';
import ProductDetails from './components/productDetails/ProductDetails';
function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:(<Home></Home>)
      },
      {
        path:'about',
        element:(<About></About>)
      },
      {
        path:'products',
        element:(<Products></Products>),
        loader:async()=>{
          return fetch('fakeData.json')
          // return fetch('../public/fakeData.json')
        }
      },
      {
        path:'details',
        element:(<ProductDetails></ProductDetails>)
      }
    ]
  },
  {
    path:'*',
    element:(<Notfound></Notfound>)
  }
 ])


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
