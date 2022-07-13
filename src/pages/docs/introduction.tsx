
const Introduction = () => <>
  <h1>Welcome to Overlord!</h1>
  <div className="doc-content">
    <h2>Introduction</h2>
    <p>
      The Overlord Framework is a full stack endeavour utilizing <b>Python & TypeScript</b> in unison.
      Your project begins with a `Django Web Server` and ends with either a
      `React-Web client` or `React-Native client` on the targeted user device. Included within this stack are;
      server tools, pre-packaged libraries, components, APIs & templates for speedy prototyping.
      Also included is an automated CI/CD pipeline for to making deployment <i>Friday certified</i>.<br/>
      <br/>
      This Framework is a great place to begin as a new developer because it allows you to ignore all the
      infrastructure madness that is involved with a JavaScript developer environment and jump right into learning the
      important stuff!<br/>
      <br/>
      If you wish to begin understanding how Overlord accomplishes what it does you will need to have an understanding
      of the following technologies:<br/>
      <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Git Version Control</li>
        <li>Django</li>
        <li>React</li>
        <li>React-Native</li>
        <li>React-Native-Web</li>
        <li>Node Package Manager</li>
      </ul>
      <br/>
      <i>
        You don't need to know any of these; but the more you know then the easier your on-boarding experience will
        be.<br/>
        <br/>If you don't really know what you're doing - just follow the documentation on this page in
        the order it is listed and you'll be a pro in no time.
      </i>.
    </p>
    <h3>Requirements & Dependencies</h3>
    <p>
      Before you get started with Overlord you'll need the latest version of Python 3.X installed. It's likely that
      any version will work just fine although it's good practice to keep it up-to-date.<br/>
      <br/>
      <a href="https://www.python.org/downloads/">Download & install latest Python 3 release</a><br/>
      <br/>
      You will also need Node & NPM for running your JavaScript locally on your development environment. We recommend
      using the latest LTS release for long-term viable support.<br/>
      <br/>
      <a href="https://nodejs.org/en/">Download & install latest Node LTS release</a><br/>
      <br/>
      Once you've got done that, you're pretty much ready to rock n' roll; however if you wish to use the React-Native
      based client option you will need to refer to their developer environment setup guide which you can find here:
      <br/><br/>
      <a href="https://reactnative.dev/docs/environment-setup">React-Native Setup Guide</a>
    </p>
    <h3>Getting started</h3>
    <p>
      To begin, just clone the <a href="https://www.github.com/EasterCompany/Overlord">Overlord</a> repository from
      github into your local environment.<br/>
      <br/>
      <b>SHH</b>: <code>git clone git@github.com:EasterCompany/Overlord.git</code>
      <br/><br/>
      <b>CLI</b>: <code>gh repo clone EasterCompany/Overlord</code><br/>
      <br/>
      navigate into the repository you just cloned and then run the install command:<br/>
      <br/>
      <b>INSTALL</b>: <code>python3 run.py tools install</code>
    </p>
  </div>
</>


export default Introduction;
