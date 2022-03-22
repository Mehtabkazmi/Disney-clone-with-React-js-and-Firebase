import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/Details/Detail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const App=()=> {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={ <Login/>}/>
          {/* <Route exact path='/home' element={ <Home/>}/> */}
          {/* <Route exact path='/detail/:id' element={ <Detail/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
