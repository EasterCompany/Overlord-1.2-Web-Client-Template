/*
  You can use this an a starting point for building your new web app. The Home page is already integrated into your
  `routes.tsx` file and will be the default landing page for your application.
*/


const Home = () => <div className="home-content">
  <div className="overlord-client-header" style={overlordClientHeaderStyle}>
    <div>
      <p>Welcome to your new Overlord Client</p>
      <h1>{process.env.REACT_APP_NAME}</h1>
    </div>
    <img src="/favicon.ico" alt="logo"/>
  </div>
  <div className="flex-row space-evenly w100">
    <LearnMoreBox image="" link="https://reactjs.org" text=""/>
    <LearnMoreBox image="" link="https://reactjs.org" text=""/>
    <LearnMoreBox image="" link="https://reactjs.org" text=""/>
  </div>
</div>


const LearnMoreBox = ({ image, text, link } : any) => <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  style={learnMoreBoxStyle}
>
  <img src={image} alt="learn more"/>
  <p>{text}</p>
</a>


const overlordClientHeaderStyle : any = {
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '80vw',
  height: '20vmin',
  margin: '0 auto 0 auto',
  border: '2px solid #dadada'
}


const learnMoreBoxStyle : any = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '33vmin',
  height: '33vmin',
  border: '2px solid #dadada'
}


export default Home;
