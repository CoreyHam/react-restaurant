
import { ReactSVG } from 'react-svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { Outlet } from 'react-router-dom';

function NavbarComp() {
    return (
        <div>
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><h1>HOME</h1></Nav.Link>
                            <Nav.Link href="menu"><h1>MENU</h1></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ReactSVG src="img/OmniEats-White.svg" wrapper="svg" className='logo' />
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default NavbarComp;
