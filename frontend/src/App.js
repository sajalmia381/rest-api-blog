import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import { NotFound, Home, BlogList, BlogDetails, Login, Register as SignUp } from './page';


function App() {
    let history = useHistory()
    const LogoutHandler = () => {
        localStorage.removeItem('access')
        console.dir(history)
        // history.push('/login')
    }
   return (
      <Router>
         <div className="App">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container">
                      <a className="navbar-brand" href="/">Example Blog</a>
                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                  <Link className="nav-link" to="/posts">Posts</Link>
                              </li>
                              {
                                  localStorage.getItem('access') ? <li className="nav-item">
                                    <Link className="nav-link" to="" onClick={LogoutHandler}>Logout</Link>
                                </li> : <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                        </>
                            }
                          </ul>
                      </div>
                  </div>
              </nav>
            </header>
            <Switch>
               <Route path='/posts/:slug' component={BlogDetails} />
               <Route path='/login' component={Login} />
               <Route path='/register' component={SignUp} />
               <Route path='/posts' exact component={BlogList} />
               <Route path="/" exact component={Home} />
               <Route exact component={NotFound} />
            </Switch>
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Gray Space It LTD 2020</p>
                </div>
            </footer>
         </div>
      </Router>
   );
}

export default App;
