import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Navigation, Resume, Projects, About} from './components';
import './App.css';


const App = ()=> {
  return (
    <Router>
    <div className="App">
      
      <Navigation />
    <Route exact path='/' component={About} />
    <Route path='/resume' component={Resume}/>
    <Route path='/projects' component={Projects}/>
    
    </div>
    </Router>
  );
}

export default App;
