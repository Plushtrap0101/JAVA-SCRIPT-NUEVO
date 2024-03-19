import React from "react";
import './header.css';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Header() {
    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="logo.png" className="logo" alt="logo" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item icono">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item icono2">
                                <PrivacyTipIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Tutoriales</a>
                            </li>
                            <li className="nav-item icono3">
                                <AllInclusiveIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Referencias</a>
                            </li>
                            <li className="nav-item icono4">
                                <AssignmentIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Recursos</a>
                            </li>
                            <li className="nav-item icono5">
                                <PermContactCalendarIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                            </li>
                            <li className="nav-item icono6">
                                <HowToRegIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Registrarse</a>
                            </li>
                            <li className="nav-item icono7">
                                <LoginIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Iniciar sesión</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;