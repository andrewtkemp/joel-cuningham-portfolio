import {Link} from 'react-router-dom';

const styles = {
   padding: {
    marginBottom: "10px"
   }
  };

function Header() {
    return (
        <header style={styles.padding}>
            <Link
                to="/"
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
                <h1>Joel Cunningham</h1>
            </Link>
            <li className="nav-item">
                <Link
                    to="/work"
                    className={window.location.pathname === "/Work" ? "nav-link active" : "nav-link"}
                >
                    Work
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Contact"
                    className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact Me
                </Link>
            </li>
        </header >
    );
}

export default Header;