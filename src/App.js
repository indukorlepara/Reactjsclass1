import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card,Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export  function App() {
  return (
    <div className="App">
       Learn React
    </div>
  );
}
export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="#">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/plans">Plans</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          This is a simple card with an image, title, and text content. You can customize it as you like.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark text-white py-4" style={{ padding:"20px; !important" }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>© 2025 My App. All rights reserved.</p>
            <p>
              <a href="#privacy" className="text-white">Privacy Policy</a> | 
              <a href="#terms" className="text-white"> Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}




