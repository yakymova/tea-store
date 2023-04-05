import './App.css';
import Header from './Components/Header/Header';
import StartPage from './Components/StartPage/StartPage';
import Products from './Components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <Header header={props.state.header} />
      <main>
        <Routes>
          <Route path='/' element={<StartPage startPage={props.state.startPage} />} />
          <Route path='/shop' element={<Products />} />
        </ Routes>
      </main>
      <Footer footer={props.state.footer} />
    </div>
  );
}

export default App;
