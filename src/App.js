import logo from './logo.svg';
import './App.css';
import {Task} from './Component/Task';
import { Navbar } from './Component/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { About } from './Component/About';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Task/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
        
    </div>
    </BrowserRouter>
  )
}

export default App;
