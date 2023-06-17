// Assets
import logoImg from '../assets/logo.png';
// Components
import { Link } from '../shared/components/routes/routes';


const Navbar = () => <header>
  <img src={logoImg} alt="Overlord Logo"/>
  <nav>
    <Link to='' name='Home'/>
    <Link to='404' name='Example'/>
    <a href="https://www.easter.company/overlord" target="_blank" rel="noopener noreferrer">Overlord</a>
  </nav>
</header>


export default Navbar;
