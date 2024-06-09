import Sidebar from './components/Sidebar';
import './App.css';
import CustomBrowserRouter from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <CustomBrowserRouter />
        </div>
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <Sidebar />
    //   <div className="main-content">
    //     <CustomBrowserRouter/>
    //   </div>
    // </div>
  ); 
}

export default App;
