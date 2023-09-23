import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from "../contexts/UserContext";
import { useContext } from 'react';

export const NavBar=()=> {
    const {user, handlerUserLogout} = useContext(UserContext);

  return (
    // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    //   <Container>  
    //     <Navbar.Brand href="#home">Pet-Selling</Navbar.Brand>
    //      <img src="data:image/png;base64,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" alt="Site Logo" className="site-logo" />

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Pet-Selling</Navbar.Brand>
     <img src="data:image/png;base64,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" alt="Site Logo" className="site-logo" />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          <NavDropdown title="Search by:" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/shop">Pets</NavDropdown.Item>
            <NavDropdown.Item href="">Users</NavDropdown.Item>
        
          </NavDropdown>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
        {/* </Nav> */}
        <Nav>
          <Nav.Link href="/Whoarewe">Who Are We</Nav.Link>
          <Nav.Link eventKey={2} href="/postnewad">Post New Ad  </Nav.Link>

         </Nav>
         {user?.userid?(
          <button
          className="Sign-Out-Button"
          onClick={handlerUserLogout}
        >
          Logout
        </button>
         )
         :
         (
          < div className="login-reg-button">
          
          <Nav.Link href="/login" id="log-in-Button">
            Login
          </Nav.Link>

            <Nav.Link href="/register" id="Reg-Button" >
            Register
            </Nav.Link>
        </div>
            )}
         {/*  
        {user?.userId ? (
          <button
            className="Sign-Out-Button"
            onClick={handlerUserLogout}
          >
            Logout
          </button>
        ) : (
           < div className="login-reg-button">
          <NavLink to="/login" id="log-in-Button">
            Login
          </NavLink>

            <NavLink to="/register" id="Reg-Button" >
            Register
            </NavLink>
  */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

