import { Route, Routes } from 'react-router-dom';
import PersonPage from "../components/PersonPage";
import Home from '../components/Home';
import ProductPage from '../components/ProductPage';

export const routes = [
    {
      path: '/',
      component: <Home/>,
      children: []
    },
    {
      path: '/person',
      component: <PersonPage/>,
      children: []
    },
    {
      path: '/product',
      component: <ProductPage/>,
      children: []
    }
  ];


const CustomBrowserRouter = () => (
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
  );
  
export default CustomBrowserRouter;