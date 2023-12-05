import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg estilosPropiosNav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src="./public/images/logopng.png" alt="Logo Le Matte"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse estilosDiv" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link estiloLista" href="#">Mates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link estiloLista" href="#">Yerbas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link estiloLista" href="#">Termos</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar