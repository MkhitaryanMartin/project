import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout'
import './App.scss';
import EditeProfile from './pages/EditProfile';
import ModalRoot from './components/ModalRoot/container';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
      <ModalRoot/>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='profile-edite/:id/*' element={<EditeProfile/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
