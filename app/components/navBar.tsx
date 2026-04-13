import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {useEffect, useState} from "react";
import {Cart} from "~/components/cart";
import {useCart} from "~/context/CartContext";
import {Link} from "react-router";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const {cartCount} = useCart();
    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/db4cecc8dc.js";
        script.crossOrigin = "anonymous";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
            <Navbar className="navbar navbar-expand-lg navbar-dark" sticky="top">
                <img className="nav-logo" src="app/images/Logo.png" alt="Lefty's appalachian kitchen logo"/>
                <NavbarBrand>Lefty's Appalachian Kitchen</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto flex-md-row-reverse" navbar>
                        <NavItem>
                            <Link to="/" className={"nav-link"}>Home <i className="fa-solid fa-house"></i></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/menu" className={"nav-link"}>Menu <i className="fa-solid fa-book-open"></i></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/reservations" className={"nav-link"}>Reservations <i className="fa-solid fa-calendar"></i></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
                {cartCount > 0 && (<Cart/>)}
            </Navbar>
    );
}


export default NavBar;