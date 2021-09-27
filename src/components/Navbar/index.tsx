import logo from 'assets/img/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand ms-3">
                <img src={logo} width="77" height="67" className="d-inline-block align-top" alt="" />
            </Link>
            <div className="navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav color-primary me-3">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/">Quem somos</Link>
                    <Link className="nav-item nav-link" to="/">Serviços</Link>
                    <Link className="nav-item nav-link" to="/">Contato</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;