
// // Copy code
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function NavbarMain() {
//     return (
//       <Navbar expand="lg" className="bg-body-tertiary fixed-top">
//         <Container>
//         <div style={{display : 'flex', }}>
//             <div style={{justifyContent : 'center'}}>
//           <Navbar.Brand href="#home">Splitwise</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           {/* <Navbar.Collapse id="basic-navbar-nav"> */}
//           </div>

//           <div style={{justifyContent : 'center'}}>
//             <Nav className="ml-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">About</Nav.Link>
//               <NavDropdown title="Options" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           {/* </Navbar.Collapse> */}
//             </div>

//           </div>

//         </Container>
//       </Navbar>
//     );
//   }

// export default NavbarMain;




import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top" style={{background: '#111111'}}>
      <Container fluid className="px-5" style={{background: '#dee2e6'}}>
        <Navbar.Brand href="#home">Splitwise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
