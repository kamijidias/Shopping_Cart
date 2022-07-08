import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3" >
            <Container>
                <Nav className="mb-3">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button style={{ width: " 4rem", height: "4rem", position: "relative" }}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-5.948 10c1.039-6.826-3.961-10.102-3.961-10.102l.778-1.898-5.389 2.26 2.27 5.384.809-2.006c-.001 0 4.591 1.74 5.493 6.362z" /></svg>
                    <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                        }}
                    >
                        3
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    )
}