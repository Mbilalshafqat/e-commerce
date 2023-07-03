import { Badge, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid style={{ position: 'sticky' }}>
                <Navbar.Brand as={Link} to="/">
                    Ryan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/shop">
                                Shop
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/shop1">
                                Shop1
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/shop2">
                                Shop2
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success" className="me-2">
                            Search
                        </Button>
                    </Form>
                    <div className="d-flex">
                        <Link to="/login">
                            <Button className="me-2" variant="primary">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button className="me-2" variant="secondary">
                                Register
                            </Button>
                        </Link>
                        <Link to="/cart">
                            <Button className="me-2" variant="primary">
                                Cart <Badge bg="secondary">0</Badge>
                            </Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
