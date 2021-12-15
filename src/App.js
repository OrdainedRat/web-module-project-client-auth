import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './../src/components/Login'
import FriendsList from './../src/components/FriendsList'
import AddFriend from './../src/components/AddFriend'
import Logout from './../src/components/Logout'
import PrivateRoute from './../src/components/PrivateRoute'


function App() {
  return (
    <Router className="App">
      <h2>Client Auth Project</h2>
      <header>
        <Link className='link' to='/'>Login</Link>
        <Link className='link' to='/friends/add'>Add a friend</Link>
        <Link className='link' to='/friends'> Friends</Link>
        <Link className='link' to='/logout'>Logout</Link>
      </header>

      <Switch>
        <PrivateRoute path='/logout' component={Logout}/>
        <PrivateRoute path='/friends/add' component={AddFriend}/>
        <PrivateRoute path='/friends' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>

    
    </Router>

  );
}

export default App;
