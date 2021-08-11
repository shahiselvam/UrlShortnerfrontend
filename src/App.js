import React from 'react';
import {BrowserRouter , Route , Switch ,Redirect} from 'react-router-dom';
import Login from "./login";
import Signup  from './signup';
import Reset from './Forgotpassword';
import Dashboard from './dashboard';
import Forget from './forget';
import UrlShortner from './Url-shortner';
import Url from './Url';

function App() {
  return (
    <>
        <BrowserRouter>   
    <Switch>
   <Route path="/login" component={Login} />
   <Route path="/Signup" component={Signup} />
   <Route path="/reset/:token" component={Reset} />
   <Route path="/dashboard" component={Dashboard} />
   <Route path="/Forget" component={Forget} />
   <Route path="/UrlShortner" component={UrlShortner} />
   <Route path="/Url" component={Url} />
   

   <Route exact path="/">
     <Redirect to="/login" />
   </Route>
   </Switch>
  </BrowserRouter>
    </>
  );
}

export default App;
