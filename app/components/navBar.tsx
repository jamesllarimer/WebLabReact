import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {useState} from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar-expand-lg navbar-dark bg-dark">
                <img className="nav-logo" src="app/images/Logo.png" alt="Lefty's appalachian kitchen logo"/>
                <NavbarBrand href="/">Lefty's Appalachian Kitchen</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/menu">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/reservations">Reservations</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;