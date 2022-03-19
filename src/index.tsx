
/*

  Welcome to your new React PWA project

  By default data-analysis on web traffic and system performance
  will be anonymously recorded for you and available to you via
  your django server admin app.

  --- IMPORTS
    any use of `import` on this file will be permanently loaded into
    the virtual-DOM upon every use-case of this web application.

  --- TARGET FUNC
    the objective of `_targetFunc` is to determine whether or not the
    appropriate rendering method is `hydrate` or `render` for the sake
    of server side rendering.

*/

// Node Modules
import React from 'react';
import { hydrate, render } from "react-dom";

// Web Analysis
import reportWebVitals from './library/reportWebVitals';
import * as serviceWorkerRegistration from './library/serviceWorkerRegistration';

// Application Styling
import './index.css';

// Application Components
import Main from './pages/Main';

// Server Side Rendering
const _targetFunc = () => {
  if (document.getElementById("root")?.hasChildNodes())
    return hydrate
  return render
}
const targetFunc = _targetFunc()

// Default Render of Application
// TODO: integrate React-Router into this
targetFunc(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)

// SERVICE WORKER         to toggle: change __init__.py
serviceWorkerRegistration.register();

// WEB VITALS             to toggle: change __init__.py
reportWebVitals();
