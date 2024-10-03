import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout'
import './App.scss';
import EditeProfile from './pages/EditProfile';
;

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='profile-edite' element={<EditeProfile/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
