import {Route, Routes} from 'react-router-dom'
import './App.css';
import Main from './components/main';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="main">
      <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/details/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
