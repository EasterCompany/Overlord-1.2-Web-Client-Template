// React
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
// Assets
import './index.css';
// Library
import * as serviceWorkerRegistration from './library/serviceWorkerRegistration';
// Components
import Routes from './routes';
import Navbar from './components/navbar';


// Application Root Component
const App = () => <>
  <Router>
    <Navbar />
    <div id="site-container">
      <Routes />
    </div>
  </Router>
</>


// Rendering Method
const rootEl = document.getElementById('root') as HTMLElement;
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, <App/>);
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App/>);
}

/*
  Progressive Web Application Setting
  To enable or disable this configuration go to your clients
  `__init__.py` in the root directory and set the `PWA` variable
  to either True or False
*/
if (process.env.REACT_APP_PWA === 'true') serviceWorkerRegistration.register();
else serviceWorkerRegistration.unregister();
