import './docs.css';
import { useState } from 'react';
import linkImg from '../../assets/link.svg';

import Introduction from './introduction';
import ServerToolsDoc from './toolsDocs/serverToolsDoc';

const btnSelected = 'rgba(191, 191, 191, 0.25)';


const Documentation = () => {
  const [selectedDocument, setDocument] = useState('Introduction');
  return <div className="page-content" style={{ flexDirection: 'row' }}>
    <DocsNavbar state={[selectedDocument, setDocument]}/>
    <div className="doc-container">

    {/* Overlord */}
    {selectedDocument === 'Introduction' ? <Introduction/> : <></>}

    {/* Tools */}
    {selectedDocument === 'Server Tools' ? <ServerToolsDoc/> : <></>}

    </div>
  </div>
}


const SideBarBtn = (props:any) => <div className="item"
  style={{ backgroundColor: props.selected[0] === props.document ? btnSelected : '' }}
  onClick={() => props.selected[1](props.document)}
> {props.document} </div>


const DocsNavbar = (props:any) => {

  const Btn = (btnProps:any) => <SideBarBtn document={btnProps.label} selected={props.state}/>
  const Link = (btnProps:any) => <div className="item" onClick={() => window.open(btnProps.url)}>
    {btnProps.label} <img src={linkImg} width="16px" alt="documentation link"/>
  </div>

  return <div className="sidebar">
    <div className="title">Overlord</div>
    <Btn label="Introduction"/>

    <div className="title">Tools</div>
    <Btn label="Server Tools"/>
    <Btn label="Client Tools"/>
    <Btn label="Unit Tests"/>

    <div className="title">Clients</div>
    <Btn label="Summary"/>
    <Link label="React Web" url="https://reactjs.org/docs/hello-world.html"/>
    <Link label="React Native" url="https://reactnative.dev/docs/intro-react"/>
    <Btn label="Custom"/>

    <div className="title">Server</div>
    <Btn label="Pipeline"/>
    <Btn label="Database"/>
    <Btn label="Universal API"/>

    <div className="footer" style={{ marginTop: 'auto' }} onClick={() => window.open("https://www.easter.company")}>
      Created With ❤️<br/>By Easter Company
    </div>
  </div>
}

export default Documentation;
