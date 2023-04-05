import './App.css';
import Header from './Components/Header/Header';
import StartPage from './Components/StartPage/StartPage';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Shop from './Components/Shop/Shop';
import Product from './Components/Product/Product';

function App(props) {
  return (
    <div className="App">
      <Header header={props.state.header} />
      <main>
        <Routes>
          <Route path='/' element={<StartPage startPage={props.state.startPage} />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='shop/product/:productId' element={<Product />} />
        </ Routes>
      </main>
      <Footer footer={props.state.footer} />
    </div>
  );
}

export default App;
