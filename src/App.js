import './App.css';
import Header from './Components/Header/Header';
import StartPage from './Components/StartPage/StartPage';
import Products from './Components/Products/Products';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Header header={props.state.header} />
      <Routes>
        <Route path='/' element={<StartPage startPage={props.state.startPage} />} />
        <Route path='/shop' element={<Products />} />
      </ Routes>

    </div>
  );
}

export default App;
