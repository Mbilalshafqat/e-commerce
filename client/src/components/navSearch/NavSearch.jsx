import React from 'react';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavSearch = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand className="link" as={Link} to="/">
                    Logo
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
                            <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            </Form>
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

export default NavSearch;
