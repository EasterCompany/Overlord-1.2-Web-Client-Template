import './docs.css';


const Documentation = () => <div className="page-content" style={{ flexDirection: 'row' }}>
  <DocsNavbar/>
  <div className="doc-content">
    <h1>Create a client</h1>
  </div>
</div>


const DocsNavbar = () => <div className="sidebar">
  <div className="title">
    Server
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="title">
    Tools
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="title">
    Clients
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="item">
    Hello World!
  </div>
  <div className="item">
    Hello World!
  </div>
</div>


export default Documentation;
