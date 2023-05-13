import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Home.css';
import './App.css';
import { AGENT_SUPERVISOR, AGENT_MANAGER, DIGITAL_BRAIN, TRANSLATOR, AIOS_AGENT, FEEDBACK } from './global';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div className="container-fluid homepage">
          <h1>
            <span>aiOS</span><span>v0.6</span>
          </h1>
          <h2 className="mb-5">
            The conversational AI OS
          </h2>
          <div className="row">
            <div className="col-md-6 research">
              <a className="project" href={AGENT_SUPERVISOR}>Research</a>
            </div>
            <div className="col-sm-6 imagine">
              <a className="project" href={AGENT_MANAGER}>Imagine</a>
            </div>
            <div className="col-sm-6 remember">
              <a className="project" href={DIGITAL_BRAIN}>Remember</a>
            </div>
            <div className="col-sm-6 build">
              <a className="project" href={TRANSLATOR}>Build</a>
            </div>
            <div className="col-sm-6 summarize">
              <a className="project" href={AIOS_AGENT}>Summarize</a>
            </div>
            <div className="col-sm-6 plus">
              <a className="project" href="#">+</a>
            </div>
            <div className='col-sm-4'></div>
            <div className="col-sm-4 my-5 feedback">
              <a className="project btn_feedback" href={FEEDBACK}>Feedback</a>
            </div>
            <div className='col-sm-4'></div>
          </div>

          <footer className="home_footer">
            <p>Copyright 2023 AfterFlea. All rights reserved</p>
          </footer>
        </div>
      ) : (
        <div className="container login_body">
          <h1>
            <span>aiOS</span><span>v0.6</span>
          </h1>
          <h2 className="mb-5">
            The conversational AI OS
          </h2>
          <div className="box">
            <h3>Login</h3>
            <input type="email" name="" placeholder="Email" />
            <input type="password" name="" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </div>
          <footer>
            <p>Copyright 2023 AfterFlea. All rights reserved</p>
          </footer>
        </div>

      )}
    </div>
  );
}
export default App;
