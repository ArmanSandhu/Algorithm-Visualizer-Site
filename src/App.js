import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Sorting from './components/Sorting';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <header>
        <NavBar/>
      </header>
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/sorting" component={Sorting}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </main>
      <footer className="footer mt-auto py-3">
        <Footer/>
      </footer>
    </div>
  );
}

export default withRouter(App);
