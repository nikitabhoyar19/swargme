import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import fire from './fire';
import { useHistory } from 'react-router-dom';

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Tour from "./pages/Tour";
import Tour2 from "./pages/Tour2";
import Tour3 from "./pages/Tour3";
import LiveDarshan1 from "./pages/LiveDarshan1";
import LiveDarshan2 from "./pages/LiveDarshan2";
import LiveDarshan3 from "./pages/LiveDarshan3";
import AccountProfiles from "./pages/AccountProfiles";
import AccountOrders from "./pages/AccountOrders";
import AccountNotification from "./pages/AccountNotification";
import Contact from "./pages/Contact";
import AddTemple from "./pages/AddTemple";
import Donate from "./pages/Donate";
import Pooja1 from "./pages/Pooja1";
import Pooja2 from "./pages/Pooja2";
import Pooja3 from "./pages/Pooja3";
import Pooja4 from "./pages/Pooja4";
import Products from "./pages/Products";
import Phone from "./pages/Phone/Phone.js";
class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: null,
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) { this.setState({ isLoggedIn: true })} 
      else { this.setState({ isLoggedIn: false })}
    })
  }

  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* blog */}
          <Route path="/SignIn" component={SignIn}>
            <SignIn />
          </Route>

          {/* login */}
          <Route path="/Login" component={Login}>
            <Login />
          </Route>

          {/*  */}
          <Route path="/ForgotPassword" component={ForgotPassword}>
            <ForgotPassword />
          </Route>

          {/* Tour 1 */}
          <Route path="/Tour" component={Tour}>
            <Tour />
          </Route>

          {/* Tour 2 */}
          <Route path="/Tour2" component={Tour2}>
            <Tour2 />
          </Route>

          {/* Tour 3 */}
          <Route path="/Tour3" component={Tour3}>
            <Tour3 />
          </Route>

          {/* Live/Darshan home */}
          <Route path="/LiveDarshan1" component={LiveDarshan1}>
            <LiveDarshan1 />
          </Route>

          {/* live pooja */}
          <Route path="/LiveDarshan2" component={LiveDarshan2}>
            <LiveDarshan2 />
          </Route>

          {/* live darshan */}
          <Route path="/LiveDarshan3" component={LiveDarshan3}>
            <LiveDarshan3 />
          </Route>

          {/* Account */}
          <Route path="/AccountProfiles" component={AccountProfiles}>
          {this.state.isLoggedIn ? (<AccountProfiles />) :  null
          }
          </Route>
{/* (this.props.history.push('/AccountProfiles') */}
          <Route path="/AccountOrders" component={AccountOrders}>
            <AccountOrders />
          </Route>

          {/* Account Notification */}
          <Route path="/AccountNotification" component={AccountNotification}>
            <AccountNotification />
          </Route>

          {/* Contact */}
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>

          {/* Add Temple */}
          <Route path="/AddTemple" component={AddTemple}>
            <AddTemple />
          </Route>

          {/* Donate */}
          <Route path="/Donate" component={Donate}>
            <Donate />
          </Route>

          {/* Pooja 1 */}
          <Route path="/Pooja1" component={Pooja1}>
            <Pooja1 />
          </Route>

          {/* Pooja 2 */}
          <Route path="/Pooja2" component={Pooja2}>
            <Pooja2 />
          </Route>

          {/* Pooja 3 */}
          <Route path="/Pooja3" component={Pooja3}>
            <Pooja3 />
          </Route>

          {/* Pooja 4 */}
          <Route path="/Pooja4" component={Pooja4}>
            <Pooja4 />
          </Route>

          {/* phone */}
          <Route path="/Phone" component={Phone}>
            <Phone />
          </Route>

          {/* Products */}
          <Route path="/Products" component={Products}>
            <Products />
          </Route>

          {/* home */}
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
