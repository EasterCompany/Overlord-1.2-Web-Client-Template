/*
  The Example component is simply a placeholder example to demonstrate how to use Components in React and Overlord.
  You probably want to delete this component before building your application unless you are still learning React.
*/
import logo from '../assets/logo.png';


const Example = () => {
  return <>
    <img src={logo} className="logo" alt="logo" />
    <p>
      Edit the <code>home.tsx</code> file in your <code>src/pages/home</code> directory and save it.
      Then your changes will be hot-reload. <b>Do not manually reload your application.</b>
    </p>
    <a
      className="link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Documentation
    </a>
  </>
}


export default Example;
