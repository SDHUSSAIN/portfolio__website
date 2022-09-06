
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Sidebar/>
              <Switch>
                  <Route exact path="/">
                    <About/>  
                  </Route>
                  <Route exact path="/portfolio">
                    <Portfolio/> 
                  </Route>
                  <Route exact path="/resume">
                    <Resume/> 
                  </Route>
                  <Route exact path="/contact">
                    <Contact/> 
                  </Route>  
              </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
