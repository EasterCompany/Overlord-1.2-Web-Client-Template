
/*

  Welcome to your new React PWA project

  By default data-analysis on web traffic and system performance
  will be anonymously recorded for you and available to you via
  your django server admin app.

  import:
    any use of `import` on this file will be permanently loaded into
    the virtual-DOM upon every use-case of this web application.

  targetFunc:
    the objective of `_targetFunc` is to determine whether or not the
    appropriate rendering method is `hydrate` or `render` for the sake
    of server side rendering.

  Home:
    the main component that is used as the default landing page for your
    application.

*/

// Node Modules
import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Web Analysis
import reportWebVitals from './library/reportWebVitals';
import * as serviceWorkerRegistration from './library/serviceWorkerRegistration';

// Application Styling
import './index.css';

// Application Components
import Routes from './routes';
import Navbar from './components/navbar';

// SERVER SIDE RENDERING
const _targetFunc = () => {
  if (document.getElementById("root")?.hasChildNodes())
    return hydrate
  return render
}
const targetFunc = _targetFunc()

// APPLICATION INDEX
targetFunc(
  <div id="site-container">
    <Router>
      <div id="article">
        <Navbar />
        <div id="article-content">
          <Routes />
        </div>
      </div>
    </Router>
  </div>,
  document.getElementById('root')
)

// SERVICE WORKER         to toggle: change 'PWA' variable in the __init__.py
// TODO: toggle between register & unregister when 'PWA' var is True / False
serviceWorkerRegistration.register();

// WEB VITALS             to toggle: change 'VITALS' variable in the __init__.py
// TODO: only call this when the 'VITALS' var is True and never when it is False
reportWebVitals();
