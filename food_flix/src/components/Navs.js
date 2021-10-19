import { Container,Nav,Navbar } from 'react-bootstrap';



function Navs() {
	return (
		<>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className="brand">FoodFlix</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">TV Shows</Nav.Link>
      <Nav.Link href="#pricing">Movies</Nav.Link>
      <Nav.Link href="#pricing">News and Popular</Nav.Link>
      <Nav.Link href="#pricing">My List</Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
    <Nav>
      <Nav.Link href="#home">Search</Nav.Link>
      <Nav.Link href="#features">Kids</Nav.Link>
      <Nav.Link href="#pricing">DVD</Nav.Link>
      <Nav.Link href="#home">Notivacations</Nav.Link>
      <Nav.Link href="#home">Profile</Nav.Link>

    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
		</>
	);
}

export default Navs;
