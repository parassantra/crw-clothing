import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
