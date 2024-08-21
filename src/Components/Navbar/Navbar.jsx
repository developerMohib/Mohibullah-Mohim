import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>This is navbar</h1>
            <ul>
                <li> <Link to="/" > Home </Link> </li>
                <li> <Link to="/" > Resume </Link> </li>
                <li> <Link to="/" > About </Link> </li>
                <li> <Link to="/" > Contact </Link> </li>
            </ul>
        </div>
    );
};

export default Navbar;