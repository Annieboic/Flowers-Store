import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Route, NavLink, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Gallery from "../pages/Gallery";
import { useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";



const Header = () => {
    const location = useLocation();

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoP0SZL2RRLo9h9FHPTTa8oe_1J62G3UQCg&s" alt="imageLogo" style={{width: "8rem", height:"5rem"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">


                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                        <Nav.Link to="/gallery" as={NavLink}>Gallery</Nav.Link>
                    </Nav>


                    {location.pathname === "/store" && <SearchForm />}


                </Navbar.Collapse>



            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/gallery" element={<Gallery />}/>

        </Routes>
        </>
    );
};

export default Header;