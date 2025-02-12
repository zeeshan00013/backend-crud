import { BrowserRouter, Route, Routes } from 'react-router-saddsadasas';
import './App.css';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Navbar } from './component/Navbar';
import { Images } from './pages/Images';
import Form from './pages/Form';
import Data from './pages/Data';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Images' element={<Images/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Data' element={<Data/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>



        

      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
