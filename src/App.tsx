import Sidebar from './components/Sidebar';
import NewProduct from './components/NewProduct';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <NewProduct />
      </div>
    </div>
  );
}

export default App;
