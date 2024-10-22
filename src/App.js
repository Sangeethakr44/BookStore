import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
   <div className='App'>
    <Routes>
    <Route path='/' element ={<Login />}></Route>
    <Route path='/register' element={<Registration />}></Route>   

    <Route path='/dashboard' element={
<>
<Nav></Nav>
<Dashboard/>
</>
      }></Route> 
    </Routes>
   </div>
  );
}

export default App;
