import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import  Container from "react-bootstrap/Container";
import Nav  from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import  Navbar  from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";




const Header = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash}/>Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight:'100px'}}
                    navbarScroll
                    >
                    <NavLink className="nav-link" href="/">Home</NavLink>
                    <NavLink className="nav-link" href="/watchList">Watch List</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;