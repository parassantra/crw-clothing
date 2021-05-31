import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentuser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import './App.scss';
import { checkUserSession } from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {
  
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route 
            exact path="/signin" 
            render={() => currentUser ? 
              (<Redirect to='/'/>) : 
              (<SignInAndSignUpPage/>)} 
          />
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
