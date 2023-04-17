import './App.css';
import Header from './Components/Header/Header';
import StartPage from './Components/StartPage/StartPage';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ShopContainer from './Components/ShopPage/ShopContainer';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import ProductContainer from './Components/Product/ProductContainer';

function App(props) {

  return (
    <div className="App">
      <Header header={props.state.header} />
      <main>
        <Routes>
          <Route path='/' element={<StartPage startPage={props.state.startPage} />} />
          <Route path='/shop' element={<ShopContainer />} />
          <Route path='/product/:productId' element={<ProductContainer />} />
          <Route path='shop/product/:productId' element={<ProductContainer />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </ Routes>
      </main>
      <Footer footer={props.state.footer} />
    </div>
  );
}

export default App;
