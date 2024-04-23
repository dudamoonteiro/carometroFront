import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Componentes/tudo.css";
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" id='login'>
        <Container>
          <Navbar.Brand href="#home"><img src="https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png" width="200px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/Cadastro">Cadastro</Nav.Link>
              <Nav.Link href="/PaginaInicial">Página Inicial</Nav.Link>
              <Nav.Link href="/Turmas">Turmas</Nav.Link>
              <Nav.Link href="/Aluno">Aluno</Nav.Link>
              <NavDropdown title="Configurações" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Administrador</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Agenda
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ocorrências</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Fale conosco☎️
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home"><img className='Brasil' src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/5881291177d6af418ec43c3c95e05056.jpg" width="50px" /></Navbar.Brand>

        </Container>
      </Navbar>
  );
}

export default BasicExample;