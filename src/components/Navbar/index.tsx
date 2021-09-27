import logo from 'assets/img/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <a className="navbar-brand" href="#">
                <img src={logo} width="77" height="67" className="d-inline-block align-top" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav color-primary">
                    <a className="nav-item nav-link active" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Quem somos</a>
                    <a className="nav-item nav-link" href="#">Serviços</a>
                    <a className="nav-item nav-link" href="#">Contato</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;