import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Link to='/'>
                        <Navbar.Brand >ProShop</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                    <Link to='/cart'>
                        <Nav className=' p-1 rounded' >
                            <i className='fas fa-shopping-cart'></i> Cart
                        </Nav>
                    </Link>
                    <Link to='/login'>

                        <Nav className=' p-1 rounded'>
                            <i className= 'fas fa-user'></i> Sign In  
                        </Nav>
                    </Link>            
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header



//ojo cambios en comandos de bootstrap version 5
// https://stackoverflow.com/questions/63948287/bootstrap-5-navbar-align-items-right

// se realizo cambio de LinkContainer a Link y  de NavLink a Nav por la version 6 del react que esta en uso y se coloco en el Nav className=' p-1 rounded' para la separacion entre el cart y el sing in