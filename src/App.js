
import './App.css';
import Banner from './component/Banner';
import Exhibit from './component/Exhibit';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
      <Banner/>
      <Exhibit/>
        <Routes>
        <Route path="/:ips" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
