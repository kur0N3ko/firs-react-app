import { Link } from 'react-router-dom';

function Navbar() {
return (
    <>
        <nav className=''>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/taskpage">Task Page</Link></li>
            </ul>
        </nav>
    </>
    );
}

export default Navbar;