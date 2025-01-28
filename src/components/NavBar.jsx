import '../CSS/NavBar.css'
import facil from '../assets/facil.png'
import CartWidget from '../components/CartWidget.jsx'

const NavBar = () => {
  return <nav>
    <a href="#"><img src={facil} alt="Logo" /></a>
    <CartWidget/>
    <ul>
        <a href="#"><li>Home</li></a>
        <a href="#"><li>Produtos</li></a>
        <a href="#"><li>Sobre</li></a>
    </ul>
    <a href="">Login</a>
  </nav>
};

export default NavBar;