import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';


import Nav from './Components/Nav';

function App() {
 

  return (
    
       <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Index />} />
            <Route path="/albums/new" element={<New />} />
            <Route exact path="/albums/:album_id" element={<Show />} />
            <Route path="/albums/:album_id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
    
  )
}

export default App
