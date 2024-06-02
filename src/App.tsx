import Sidebar from './components/Sidebar';
import NewProduct from './components/NewProduct';
import ListProducts from './components/ListProducts';
import './App.css';
import ListPeople from './components/ListPeople';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <NewProduct />
        <ListProducts />
        <ListPeople />
      </div>
    </div>
  );
}

export default App;
