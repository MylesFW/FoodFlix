function Navbar() {
	return (
		<>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


			<TestClass test_prop={'test text'} />
			<FunctionalComponent test_num={10} test_string="tester" />
		</>
	);
}

export default Navbar;
