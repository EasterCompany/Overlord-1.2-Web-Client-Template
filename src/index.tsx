// React
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
// Assets
import './index.css';
// Components
import Routes from './routes';
import Navbar from './components/navbar';
// Library
import { isTemplateTag } from './shared/library/devTools';
import * as serviceWorkerRegistration from './library/serviceWorkerRegistration';

/* React Application Layout */
const App = () => <Router>
  <Navbar/>
  <Routes/>
</Router>

/* Dev Mode Compatibility */
const docHead = document.querySelector('head') as HTMLElement;
if (docHead !== undefined && docHead !== null)
  docHead.style.display = 'hidden';
if (isTemplateTag.test(document.title) && process.env.REACT_APP_NAME !== undefined)
  document.title = `[DEV] ${process.env.REACT_APP_NAME}`;

/* Renders React App */
const rootEl = document.getElementById('web-app-root-container') as HTMLElement;
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, <App/>);
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App/>);
}

/* Toggles PWA Functionality */
if (process.env.REACT_APP_PWA === 'true') serviceWorkerRegistration.register();
else serviceWorkerRegistration.unregister();
