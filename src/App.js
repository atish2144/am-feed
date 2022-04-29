
import './App.css';
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login'
import Feed from './components/Feed';
// import Header from './components/Header';
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">


      {/* <Header></Header>
      <Feed /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Feed" element={<Feed />}></Route>
        <Route path="/Edit" element={<Edit />}></Route>

      </Routes>

    </div>
  );
}

export default App;
