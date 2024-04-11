import { useNavbar } from './NavbarContext';

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
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </nav>
    <button onClick={handleShowNavbar}>Show Navbar</button>
</>
);
}

export default Navbar;