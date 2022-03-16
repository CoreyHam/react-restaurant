import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { getData } from '../utils/data';

export default function Menu() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><h1>HOME</h1></Nav.Link>
                            <Nav.Link href="/menu"><h1>MENU</h1></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ReactSVG src="img/OmniEats-White.svg" wrapper="svg" className='logo' />
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}