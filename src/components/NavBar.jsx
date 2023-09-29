import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from "../contexts/UserContext";
import { useContext } from 'react';
import logo from '../assets/logo.png'

export const NavBar=()=> {
    const {user, handlerUserLogout} = useContext(UserContext);
    console.log(user)
  return (
   
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        <div className="brand-container d-flex">
          <img src={logo} alt="" className='h-25' />
          <h1>PetSelling</h1>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-auto my-2 my-lg-0"
            
            // navbarScroll
          >
              <NavDropdown title="Search by: " id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pet">Pet </NavDropdown.Item>
              <NavDropdown.Item href="/users">User </NavDropdown.Item>
              <NavDropdown.Item href="/city"> City  </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          
            <Nav.Link href="/postnewad" >Post New Ad  </Nav.Link>
            <Nav.Link href="/Whoarewe">Who Are We  </Nav.Link>
          </Nav>
          <div className="actions">
          {user?.user_id?(
          <button
          className="Sign-Out-Button"
          onClick={handlerUserLogout}
          >
          Logout
        </button>
         )
         :
         (
          < div className="login-reg-butaton">
          
          <Nav.Link href="/login" id="log-in-Button">
            Login
          </Nav.Link>

            <Nav.Link href="/register" id="Reg-Button" >
            Register
            </Nav.Link>
        </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}

