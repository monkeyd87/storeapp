import logo from './logo.svg';
import './App.css';
import {Home} from './pages/Home'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/home'element={<Home/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
