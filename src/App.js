import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout'
import './App.scss';
import EditeProfile from './pages/EditProfile';
import ModalRoot from './components/ModalRoot/container';



function App() {
  return (
    <div className="App">
      <ModalRoot/>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='profile-edite/:id/*' element={<EditeProfile/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
