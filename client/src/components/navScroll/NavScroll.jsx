import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavScroll.css';

const NavScroll = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand className="link" as={Link} to="/">
                    Navbar with text
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand-lg'}
                    aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav.Link className="px-3 link" as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link className="px-3 link" as={Link} to="/about">
                                Features
                            </Nav.Link>
                            <Nav.Link className="px-3 link" as={Link} to="/contact">
                                Pricing
                            </Nav.Link>
                        </Navbar.Collapse>
                        <Button className="mx-2" variant="warning" size="sm">
                            Đăng ký
                        </Button>{' '}
                        <Button className="mx-2" variant="light" size="sm">
                            Đăng nhập
                        </Button>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavScroll;
