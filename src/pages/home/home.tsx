/*
  You can use this an a starting point for building your new web app. The Home page is already integrated into your
  `routes.tsx` file and will be the default landing page for your application.
*/
import reactSVG from '../../assets/react.svg';
import logoSVG from '../../assets/logo.svg';
import logoPNG from '../../assets/logo.png';
import awsSVG from '../../assets/aws.svg';
import epanelSVG from '../../assets/epanel.svg';


const Home = () => <div className="home-content">
  <div style={overlordClientHeaderStyle}>
    <div style={{ textAlign: 'center', width: '65vmin', maxWidth: '1080px', paddingRight: '18px' }}>
      <p>Welcome to your new Overlord Web Client,</p>
      <h1 style={{ textTransform: 'uppercase' }}>{process.env.REACT_APP_NAME}</h1>
    </div>
    <img src={logoPNG} alt="logo" style={{ width: '25vmin', height: '25vmin' }}/>
  </div>
  <div className="flex-row flex-wrap space-evenly" style={{ width: '75vw', maxWidth: '1080px' }}>
    <LearnMoreBox
      image={reactSVG}
      link="https://reactjs.org"
      text="Learn React"
    />
    <LearnMoreBox
      image={logoSVG}
      link="https://www.easter.company/overlord"
      text="Learn Overlord"
    />
    <LearnMoreBox
      image={awsSVG}
      link="https://aws.amazon.com/free/compute/lightsail-vs-ec2/"
      text="Learn AWS"
    />
    <LearnMoreBox
      image={epanelSVG}
      link="https://www.easter.company/overlord/epanel"
      text="Learn ePanel"
    />
  </div>
</div>


const LearnMoreBox = ({ image, text, link } : any) => <a
  className="inner-glow"
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  style={learnMoreBoxStyle}
>
  <img src={image} alt="learn more" style={{
    width: 'auto',
    height: '50%'
  }}/>
  <p style={{
    fontSize: 'calc(6px + 1.2vmin)'
  }}>{text}</p>
</a>


const overlordClientHeaderStyle : any = {
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '80vw',
  height: '20vmin'
}


const learnMoreBoxStyle : any = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '20vmin',
  height: '20vmin',
  margin: '2vmin 2vmin',
  borderRadius: '6px',
  border: '1px solid rgba(175,175,175,0.75)'
}


export default Home;
