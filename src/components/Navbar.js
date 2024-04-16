import { useNavbar } from './NavbarContext';
import { Link } from 'react-router-dom';

function Navbar() {
const { isNavbarVisible, toggleNavbarVisibility, showNavbar } = useNavbar();
// const [showButton, setShowButton] = useState(true);

const handleShowNavbar = () => {
    showNavbar();
    // setShowButton(true);

};

return (
    <>
        <nav style={{ display: isNavbarVisible ? 'block' : 'none' }}>
            <button onClick={toggleNavbarVisibility}>Hide Navbar</button>  
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/taskpage">Task Page</Link></li>
                </ul>
        </nav>
            <button onClick={handleShowNavbar}>Show Navbar</button>
    </>
    );
}

export default Navbar;